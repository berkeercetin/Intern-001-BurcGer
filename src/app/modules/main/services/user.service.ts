import { Injectable, inject } from '@angular/core';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { Storage } from '@angular/fire/storage';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private firestore: Firestore = inject(Firestore);
  private readonly storage: Storage = inject(Storage);
  constructor() { }

  async getUser() {
    const userProfile = doc(this.firestore, 'user/quhjHY7oTFdexWX7ezQDtSgIHCm2');
    return await getDoc(userProfile);
  }

  async updatePhoto(event: any) {
    const userProfile = doc(this.firestore, 'user/quhjHY7oTFdexWX7ezQDtSgIHCm2');
    return await getDoc(userProfile);
  }

  async downloadFile() {
  }

  uploadFile(input: HTMLInputElement) {
  }
}
