import { Injectable, inject } from '@angular/core'
import { Firestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private readonly firestore: Firestore = inject(Firestore)
  constructor () { }
}
