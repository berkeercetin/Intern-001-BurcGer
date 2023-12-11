import { Component, OnInit, inject } from '@angular/core'
import {
  Firestore,
  doc,
  updateDoc
} from '@angular/fire/firestore'
import { FormBuilder, FormControl } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.page.html',
  styleUrls: ['./edit-comment.page.scss']
})
export class EditCommentPage implements OnInit {
  private readonly firestore: Firestore = inject(Firestore)
  public alertButtons = ['Uptaded']
  zodiacComment: any[] = []
  // zodiacSub: Subscription;

  form = this.formBuilder.group({
    title: new FormControl(''),
    commentType: new FormControl(''),
    photoUrl: new FormControl(''),
    comment: new FormControl(''),
    zodiac: new FormControl(''),
    commentID: new FormControl('')
  })

  constructor (private readonly formBuilder: FormBuilder,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit () {
  }

  ionViewWillEnter () {
    console.log(window.history.state)
    this.form.patchValue(window.history.state)
    console.log(this.form.value)
    this.route.params.subscribe(
      params => {
        console.log(params['commentID'])
      }
    )
  }

  updateData () { // veri guncellemesi yapilan kisim.
    // eslint-disable-next-line spaced-comment
    const docInstance = doc(this.firestore, 'zodiac-comment', this.form.controls.commentID.value as string) //CommentID'ye gore duzenleme yapilan yer.
    console.log(this.form.value)
    updateDoc(docInstance,
      this.form.value
    ).then(
      res => {
        console.log(res)
        console.log('Update Completed')
      }).catch(
      err => {
        console.log(err)
      })
  }

  // ngOnDestroy(){ //subscribe kullanılan yerlerde kullanılır.
  //   if(this.zodiacSub && !this.zodiacSub.closed){
  //     this.zodiacSub.unsubscribe();
  //   }
  // }
}
