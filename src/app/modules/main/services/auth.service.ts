import { Injectable, inject } from '@angular/core'
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  // sendEmailVerification,
  sendPasswordResetEmail,
  User,
  UserCredential
} from '@angular/fire/auth'
import { doc, Firestore, setDoc } from '@angular/fire/firestore'
import { UserModel } from '../models/usermodel'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly _firestore = inject(Firestore)
  private readonly _auth = inject(Auth)

  async signup (email: string, password: string, data: any): Promise<UserCredential | User> {
    return await createUserWithEmailAndPassword(
      this._auth,
      email.trim(),
      password.trim()
    ).then( auth => { return this._setUserData(auth, { ...data }) })
  }

  async login (email: string, password: string): Promise<UserCredential> {
    console.log(email.trim(), password.trim())
    return await signInWithEmailAndPassword(
      this._auth,
      email.trim(),
      password.trim()
    )
  }

  private async _setUserData (auth: UserCredential, user: UserModel): Promise<any> {
    const userDocRef = doc(this._firestore, `user/${auth.user.uid}`)
    console.log('sonVeri ' + user)
    user.uid = auth.user.uid
    return await setDoc(userDocRef, user).then(() => user)
  }

  async resetPassword (email: string) {
    await sendPasswordResetEmail(this._auth, email)
  }

  constructor () { }
}
