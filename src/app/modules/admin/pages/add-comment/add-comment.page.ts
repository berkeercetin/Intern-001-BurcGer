import { Component, OnInit, inject } from '@angular/core';
import { 
  Firestore, 
  query, 
  collection, 
  collectionData, 
  collectionSnapshots, 
  getDocs,
  doc,
  addDoc, 
  updateDoc } from '@angular/fire/firestore'

import { FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.page.html',
  styleUrls: ['./add-comment.page.scss'],
})
export class AddCommentPage implements OnInit {
  public alertButtons = ['Tamam'];
  private firestore: Firestore = inject(Firestore);

  constructor() { }

  // async addComment(zodiac: string, commentType: string, title: string, photoUrl: string, comment: string){
  //   const docRef = await addDoc(doc(this.firestore, 'zodiacComment'), {
  //     zodiac: zodiac,
  //     commentType: commentType,
  //     title: title,
  //     photoUrl: photoUrl,
  //     comment: comment
  //   });
  //   console.log("Document written with ID: ", docRef.id);
  // }

  addData(addComment: any){

    const collectionInstance = collection(this.firestore, 'zodiac-comment');
    addDoc(collectionInstance, addComment.value).then(() =>{
      console.log('Data Saved.');
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  ngOnInit() {
  }
}