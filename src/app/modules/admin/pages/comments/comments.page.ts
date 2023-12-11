import { Component, OnInit, inject } from '@angular/core'
import { Firestore, collection, collectionData, getDocs, query } from '@angular/fire/firestore'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss']
})
export class CommentsPage implements OnInit {
  private readonly firestore: Firestore = inject(Firestore)
  comments: any[] = []
  comment$: Observable<[]>
  constructor () {
    const commentsCollection = collection(this.firestore, 'zodiac-comment')
    this.comment$ = collectionData(commentsCollection) as Observable<[]>
    const zodiacCommentQuery = query(commentsCollection) as any

    getDocs(zodiacCommentQuery)
      .then(
        res => {
          console.log(res.docs.map(doc => doc.data()))
          this.comments = res.docs.map(doc => doc.data())
          // console.log(this.zodiacComment)
        }
      )
      .catch((err: any) => {
        console.error(err)
      })
  }

  ngOnInit () {}
}
