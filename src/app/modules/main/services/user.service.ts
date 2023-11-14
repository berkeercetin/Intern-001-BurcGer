import { Injectable, inject } from '@angular/core'
import { Auth } from '@angular/fire/auth'
import { Firestore, doc, getDoc, updateDoc } from '@angular/fire/firestore'
import { Storage, ref, uploadBytesResumable, getDownloadURL } from '@angular/fire/storage'
import { UserModel } from '../models/usermodel'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly firestore: Firestore = inject(Firestore)
  private readonly storage: Storage = inject(Storage)
  private readonly _auth = inject(Auth)
  constructor () { }

  async getUser () {
    const userProfile = doc(this.firestore, 'user/' + this._auth.currentUser?.uid)
    return await getDoc(userProfile)
  }

  // async updatePhoto (event: any) {
  //   const userProfile = doc(this.firestore, 'user/quhjHY7oTFdexWX7ezQDtSgIHCm2')
  //   return await getDoc(userProfile)
  // }

  async uploadFile (input: HTMLInputElement) {
    try {
      if (input.files == null) return undefined
      const files: FileList = input.files
      // eslint-disable-next-line no-unreachable-loop
      const file = files.item(0)
      if (file != null) {
        const storageRef = ref(this.storage, file.name)
        const res = await uploadBytesResumable(storageRef, file)
        const downloadURL = await getDownloadURL(res.ref)
        return downloadURL
      } else { return undefined }
    } catch (error) {
      console.log(error)
      return undefined
    }
  }

  async downloadFile () {
  }

  async updateUser (form: UserModel) {
    const userProfile = doc(this.firestore, 'user/' + this._auth.currentUser?.uid)
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-confusing-void-expression
    return await updateDoc(userProfile, {...form})
  }

  signOut () {

  }

  async updateCreator (user: UserModel) {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    user.contentCreator = !user.contentCreator
    const userProfile = doc(this.firestore, 'user/' + user.uid)
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-confusing-void-expression
    return await updateDoc(userProfile, { ...user })
  }
}
