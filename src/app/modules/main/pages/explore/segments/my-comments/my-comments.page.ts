import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController, PopoverController } from '@ionic/angular'
import { CommentModel } from 'src/app/modules/main/models/comment.model';
import { FeedBackModel } from 'src/app/modules/main/models/feedback.model';
import { CommentService } from 'src/app/modules/main/services/comment.service';
import { FeedbackService } from 'src/app/modules/main/services/feedback.service';

@Component({
  selector: 'app-my-comments',
  templateUrl: './my-comments.page.html',
  styleUrls: ['./my-comments.page.scss']
})
export class MyCommentsPage implements OnInit {
  @Input() data: CommentModel = {}
  @Input() feedback: FeedBackModel = {}
  now = new Date()
  items: any[] = []
  comments: CommentModel[] = []
  feedbackForm!:FormGroup
  rating: number | undefined;
  stars: string[] = Array(5).fill('star-outline');
  isDropdownOpen: boolean[] = new Array(this.items.length).fill(false)

  feedbackData (){
    this.feedbackForm = this.fb.group({
      commentId:[''],
      commentRequesterUid:undefined,
      commentWriterUid:undefined,
      feedbackDate:this.now.toLocaleDateString(),
      feedbackStar:[''],
      feedbackText: this.feedback.feedbackText
    })
  }

  
  constructor (public fb: FormBuilder, private feedbackService:FeedbackService, private modalController: ModalController , private popoverController: PopoverController, private commentService:CommentService, private readonly changeDetectorRef: ChangeDetectorRef) {
    this.commentService.getCommentsRequesterUid().subscribe(res => {
      this.comments = res
      this.changeDetectorRef.detectChanges()
      console.log(this.comments)
    })
  }
  
  selectStar(index: number) {
    this.stars = this.stars.map((_, i) => (i <= index ? 'star' : 'star-outline'));
    this.rating = index + 1;
    this.feedbackForm.get('feedbackStar')?.setValue(this.rating)
  }
  
  
  submitRating(id:string) {
    this.feedbackForm.get('commentId')?.setValue(id)
    this.feedbackService.addFeedBack(this.feedbackForm.value)
    this.popoverController.dismiss();
    console.log(this.feedbackForm.value)
  }
  
  toggleDropdown (id: number): void {
    this.isDropdownOpen[id] = !this.isDropdownOpen[id]
  }

  ngOnInit () {
    this.feedbackData()
  }
}
