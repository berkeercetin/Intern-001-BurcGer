import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { FeedBackModel } from '../models/feedback.model';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private firestore: Firestore) { }

  async addFeedBack (feedback:FeedBackModel) {
    const feedbacksRef = collection(this.firestore, 'creator-comment-feedbacks')
    return await addDoc(feedbacksRef, feedback)
  }
}
