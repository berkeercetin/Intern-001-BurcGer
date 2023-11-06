import { Injectable } from '@angular/core'
import { Firestore, addDoc, collection, collectionData, doc, updateDoc } from '@angular/fire/firestore'
import { CommentModel } from '../models/comment.model'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor (private readonly firestore: Firestore) { }

  getComments (): Observable<CommentModel[]> {
    const commnetsRef = collection(this.firestore, 'creator-comments')
    return collectionData(commnetsRef, { idField: 'commentId' }) as Observable<CommentModel[]>
  }

  async addComments (comment: CommentModel) {
    const commnetsRef = collection(this.firestore, 'creator-comments')
    return await addDoc(commnetsRef, comment)
  }

  async updateComment (comment: CommentModel) {
    const commentRef = doc(this.firestore, `creator-comments/${comment.commentId}`)
    await updateDoc(commentRef, { commentTitle: comment.commentTitle, commentText: comment.commentText, commentImage: comment.burImg })
    console.log(`creator-comments/${comment.commentId}`)
  }
}
