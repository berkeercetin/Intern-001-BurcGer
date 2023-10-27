import { Injectable, inject } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  User,
  UserCredential
} from '@angular/fire/auth';
import { doc, Firestore, setDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _firestore = inject(Firestore);
  private _auth = inject(Auth);

  signup(email: string, password: string, data: any): Promise<UserCredential | User> {
    return createUserWithEmailAndPassword(
      this._auth,
      email.trim(),
      password.trim()
    ).then((auth) => this._setUserData(auth, data));
  }

  login(email: string, password: string): Promise<UserCredential> {
    console.log(email.trim(),password.trim())
    return signInWithEmailAndPassword(
        this._auth,
        email.trim(),
        password.trim()
      );
    }

  private _setUserData(auth: UserCredential, data: any): Promise<any> {
    const user = {
      uid: auth.user.uid,
      name: (auth.user.displayName || auth.user.email)!,
      email: auth.user.email!,
      surname: data.surname,
      birthPlace: data.birthPlace,
      birthTime: data.birthTime,
      gender: data.gender,
      relation: data.relation,
      job: data.job,

    };
    const userDocRef = doc(this._firestore, `user/${user.uid}`);
    return setDoc(userDocRef, user).then(() => user);
  }

  resetPassword(email: string){
    return sendPasswordResetEmail(this._auth, email)
  }

 
  constructor() { }
}
