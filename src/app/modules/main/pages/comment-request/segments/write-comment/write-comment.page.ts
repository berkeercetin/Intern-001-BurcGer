import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core'
import { ToastController } from '@ionic/angular'
import { CommentModel } from 'src/app/modules/main/models/comment.model'
import { CommentService } from 'src/app/modules/main/services/comment.service'

@Component({
  selector: 'app-write-comment',
  templateUrl: './write-comment.page.html',
  styleUrls: ['./write-comment.page.scss']
})
export class WriteCommentPage implements OnInit {
  @Input() data: CommentModel = {
    commentTitle: undefined,
    commentZodiac: undefined,
    commentType: undefined,
    commentWriteDate: undefined,
    commentText: undefined,
    commentDay: undefined,
    commentWeek: undefined,
    commentMonth: undefined,
    commentYear: undefined,
    commentId: undefined,
    burImg: []
  }

  items: any[] = []
  items2: any[] = []
  comments: CommentModel[] = []
  comment!: CommentModel

  isDropdownOpen: boolean[] = new Array(this.items.length).fill(false)
  isDropdownOpen2: boolean[] = new Array(this.items2.length).fill(false)

  toggleDropdown (id: number): void {
    this.isDropdownOpen[id] = !this.isDropdownOpen[id]
  }

  toggleDropdown2 (id: number): void {
    this.isDropdownOpen2[id] = !this.isDropdownOpen2[id]
  }

  constructor (private readonly toastCtrl: ToastController, private readonly commentService: CommentService, private readonly changeDetectorRef: ChangeDetectorRef) {
    this.commentService.getCommentsByWriterId().subscribe(res => {
      this.comments = res
      this.changeDetectorRef.detectChanges()
      console.log(res)
    })
  }


  /* Yanlış Yerde */
  // async updateComment () {
  //   await this.commentService.updateComment(this.comment)
  //     .then((res) => { console.log(res) })
  //     .catch(err => { console.log(err) })
  //   const toast = await this.toastCtrl.create({
  //     message: 'Comment updated!.',
  //     duration: 2000
  //   })
  //   toast.present()
  //     .then((res) => { console.log(res) })
  //     .catch(err => { console.log(err) })
  // }

  ngOnInit () {
  }
}
