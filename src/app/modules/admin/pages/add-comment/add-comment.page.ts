import { Component, OnInit, inject } from '@angular/core'
import { Firestore, collection, addDoc, updateDoc } from '@angular/fire/firestore'

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.page.html',
  styleUrls: ['./add-comment.page.scss']
})
export class AddCommentPage implements OnInit {
  public alertButtons = ['Tamam']
  private readonly firestore: Firestore = inject(Firestore)

  constructor () { }

  // burcSecildi () {
  //   console.log('Seçilen Burç:', this.selectedZodiac)
  // }

  addData (addComment: any) {
    const collectionInstance = collection(this.firestore, 'zodiac-comment')
    addDoc(collectionInstance, addComment.value)
      .then((res) => {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises, spaced-comment
        updateDoc(res, { commentID: res.id }) //commentID otomatik ekleme islemi.
        console.log('Data Saved.')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  ngOnInit () {
  }
}
