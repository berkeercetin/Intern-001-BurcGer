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
    const commnetsRef = collection(this.firestore, 'zodiac-comment')
    return collectionData(commnetsRef, { idField: 'commentId' }) as Observable<CommentModel[]>
  }

  async addComments (comment: CommentModel) {
    const commnetsRef = collection(this.firestore, 'zodiac-comment')
    return await addDoc(commnetsRef, comment)
  }

  async updateComment (comment: CommentModel) {
    const commentRef = doc(this.firestore, `zodiac-comment/${comment.commentId}`)
    await updateDoc(commentRef, { commentTitle: comment.commentTitle, commentText: comment.commentText, commentImage: comment.burImg })
    console.log(`zodiac-comment/${comment.commentId}`)
  }
}
