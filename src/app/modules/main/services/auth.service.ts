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
    ).then(async (auth) => await this._setUserData(auth, data))
  }

  async login (email: string, password: string): Promise<UserCredential> {
    console.log(email.trim(), password.trim())
    return await signInWithEmailAndPassword(
      this._auth,
      email.trim(),
      password.trim()
    )
  }

  private async _setUserData (auth: UserCredential, data: any): Promise<any> {
    const user = {
      uid: auth.user.uid,
      name: data.name,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      email: auth.user.email!,
      surname: data.surname,
      birthPlace: data.birthPlace,
      birthTime: data.birthTime,
      gender: data.gender,
      relation: data.relation,
      job: data.job,
      premium: data.premium,
      contentCreator: data.contentCreator,
      coin: data.coin

    }
    const userDocRef = doc(this._firestore, `user/${user.uid}`)
    return await setDoc(userDocRef, user).then(() => user)
  }


  async resetPassword (email: string) {
    await sendPasswordResetEmail(this._auth, email)
  }

  constructor () { }
}
