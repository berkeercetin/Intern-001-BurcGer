import { Injectable } from '@angular/core'
import { Firestore, addDoc, collection, collectionData, doc, query, updateDoc, where } from '@angular/fire/firestore'
import { CommentModel } from '../models/comment.model'
import { Observable } from 'rxjs'
import { CommentReqModel } from '../models/commentReq.model'

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor (private readonly firestore: Firestore) { }

  async addCommentRequest (commentReq:CommentReqModel) {
    const commentReqRef = collection(this.firestore, 'comment-requests')
    return await addDoc(commentReqRef, commentReq)
  }

  getCommentRequest () {
    const commentReqRef = collection(this.firestore, 'comment-requests')
      return
  }

  getComments (): Observable<CommentModel[]> {
    const commnetsRef = collection(this.firestore, 'creator-comments')
    return collectionData(commnetsRef, { idField: 'commentId' }) as Observable<CommentModel[]>
  }

  getAdminComments (commentType: string, commentDateType: string, commentDate:string): Observable<CommentModel[]> {
    const commnetsRef = collection(this.firestore, 'zodiac-comment')
    const q = query(commnetsRef, where('commentType', '==', commentType), where(commentDateType, '==', commentDate))
    return collectionData(q) as Observable<CommentModel[]>
  }

  getCommentsByWriterId() {
    const commentsRef = collection(this.firestore, 'creator-comments')
    const q = query(commentsRef, where('commentWriterUid', '==', "asd"))
    return collectionData(q, { idField: 'commentId'});
  
  }

  getCommentsRequesterUid() {
    const commentsRef = collection(this.firestore, 'creator-comments')
    const q = query(commentsRef, where('commentRequesterUid', '==', "asd"))
    return collectionData(q, { idField: 'commentId'});
  
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
