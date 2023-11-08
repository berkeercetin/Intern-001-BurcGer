import { Component, OnInit, inject } from '@angular/core';
import { Firestore, collection, collectionData, query, getDocs } from '@angular/fire/firestore'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-app-feedback',
  templateUrl: './app-feedback.page.html',
  styleUrls: ['./app-feedback.page.scss'],
})
export class AppFeedbackPage implements OnInit {
  private readonly firestore: Firestore = inject(Firestore)
  feedbacks: any[] = []
  feedback$: Observable<[]>
  constructor () {
    const feedbacksCollection = collection(this.firestore, 'feedback')
    this.feedback$ = collectionData(feedbacksCollection) as Observable<[]>
    const commentFeedbackQuery = query(feedbacksCollection) as any

    getDocs(commentFeedbackQuery)
      .then(
        res => {
          console.log(res.docs.map(doc => doc.data()))
          this.feedbacks = res.docs.map(doc => doc.data())
        }
      )
      .catch((err: any) => {
        console.error(err)
      })
  }

  ngOnInit () {
  }
}
