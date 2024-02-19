import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CommentViewPage } from '../../modals/comment-view/comment-view.page';
import { MyAccountPage } from '../../modals/my-account/my-account.page';
import { CommentService } from '../../services/comment.service';
import { CommentModel } from '../../models/comment.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  user: any;
  comment: CommentModel[] | undefined;
  firstComment: any;
  commentDate: string = '';
  currentDate = new Date();
  constructor(
    private readonly modalController: ModalController,
    private readonly userService: UserService,
    private readonly router: Router,
    private readonly commentService: CommentService,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.fetchUser();
  }

  getAdminComment(commentType: string, commentDateType: string) {
    if (commentType == 'yearly') {
      this.commentDate = this.currentDate.getFullYear().toString();
    }
    if (commentType == 'monthly') {
      this.commentDate = this.currentDate.getMonth().toString();
    }
    if (commentType == 'weekly') {
      this.currentDate.setUTCDate(
        this.currentDate.getUTCDate() + 4 - (this.currentDate.getUTCDay() || 7)
      );
      // Get first day of year
      const yearStart = new Date(
        Date.UTC(this.currentDate.getUTCFullYear(), 0, 1)
      );
      // Calculate full weeks to nearest Thursday
      this.commentDate = Math.ceil(
        ((this.currentDate.getTime() - yearStart.getTime()) / 86400000 + 1) / 7
      ).toString();
    }
    if (commentType == 'daily') {
      this.commentDate = this.currentDate.getDate().toString();
      console.log(this.commentDate);
    }

    this.commentService
      .getAdminComments(commentType, commentDateType, this.commentDate)
      .subscribe(
        (res: CommentModel[]) => {
          this.comment = res;
          this.changeDetectorRef.detectChanges();

          // Assuming you have a single comment from the response for this example
          this.firstComment = res[0];

          // Call commentViewModal with the values
          this.commentViewModal(
            this.firstComment.burImg,
            this.firstComment.commentTitle,
            this.firstComment.commentText
          );
        },
        (error) => {
          console.error(error);
        }
      );
  }

  navigateToPage(page: string) {
    this.router
      .navigateByUrl(page)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async commentViewModal(
    burcImg: string,
    commentTitle: string,
    commentText: string
  ) {
    const modal = await this.modalController.create({
      component: CommentViewPage,
      componentProps: {
        img: burcImg,
        title: commentTitle,
        text: commentText,
      },
    });
    void modal.present();
    const { data } = await modal.onDidDismiss();
    console.log(data);
  }

  async myProfileModal() {
    const modal = await this.modalController.create({
      component: MyAccountPage,
    });
    void modal.present();
    const { data } = await modal.onDidDismiss();
    console.log(data);
  }

  async fetchUser() {
    const docSnap = this.userService.getUser();
    if ((await docSnap).exists()) {
      //console.log('Document data:', (await docSnap).data())
      this.user = (await docSnap).data();
    } else {
      // docSnap.data() will be undefined in this case
      //console.log('No such document!')
    }
  }
}
