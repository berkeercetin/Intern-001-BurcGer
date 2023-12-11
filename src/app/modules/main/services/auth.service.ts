import { Injectable, inject } from '@angular/core'
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  User,
  UserCredential,
  applyActionCode
} from '@angular/fire/auth'
import { addDoc, collection, doc, Firestore, setDoc, updateDoc } from '@angular/fire/firestore'
import { UserModel } from '../models/usermodel'
import { GlobalService } from 'src/app/shared/global.service'
import { ZodiacModel } from '../models/zodiac.model'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly _firestore = inject(Firestore)
  private readonly _auth = inject(Auth)
  public globalService: GlobalService = new GlobalService()

  async signup(email: string, password: string, data: any): Promise<UserCredential | User> {
    return await createUserWithEmailAndPassword(
      this._auth,
      email.trim(),
      password.trim()
    ).then(async auth => { 
      await sendEmailVerification( auth.user)
      return await this._setUserData(auth, { ...data })
    })
   
  }

  async login(email: string, password: string): Promise<UserCredential> {
    console.log(email.trim(), password.trim())
    return await signInWithEmailAndPassword(
      this._auth,
      email.trim(),
      password.trim()
    )
  }

  async resend(){
    return await sendEmailVerification( this.globalService.data.user)
  }



  private async _setUserData(auth: UserCredential, user: UserModel): Promise<any> {
    const userDocRef = doc(this._firestore, `user/${auth.user.uid}`)
    console.log('sonVeri ' + user)
    user.uid = auth.user.uid
    return await setDoc(userDocRef, user).then(() => user)
  }

  async resetPassword(email: string) {
    await sendPasswordResetEmail(this._auth, email)
  }

  getUserUid() {
    return this._auth.currentUser?.uid
  }

  signOut() {
    return this._auth.signOut()
  }

  async verifiedEmail(code: string){
    return await applyActionCode(this._auth, code)
  }



  constructor(public firestore: Firestore) { }

  async addZodiacInformation(zodiacs: ZodiacModel[], myUser: UserModel): Promise<any> {
    let user = this.globalService.data.user

    const userDocRef = doc(this._firestore,'/user/'+ user.uid )
    console.log('sonVeri ' + myUser)
    return await updateDoc(userDocRef, {...myUser}).then(() => myUser)
  }
  
}
