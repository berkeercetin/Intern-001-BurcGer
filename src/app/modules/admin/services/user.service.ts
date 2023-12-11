import { Injectable, inject } from '@angular/core'
import { Firestore, collection, collectionData, doc, getDocs, query, updateDoc } from '@angular/fire/firestore'
import { Observable } from 'rxjs'
import { UserModel } from '../../main/models/usermodel'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly firestore: Firestore = inject(Firestore)
  constructor () { }

  async getUsers () {
    const userFeaturesCollection = collection(this.firestore, 'user')
    const featuresQuery = query(userFeaturesCollection) as any
    return await getDocs(featuresQuery)
  }

  async updateCreator (user: UserModel) {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    user.contentCreator = !user.contentCreator
    const userProfile = doc(this.firestore, 'user/' + user.uid)
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-confusing-void-expression
    return await updateDoc(userProfile, { ...user })
  }
}
