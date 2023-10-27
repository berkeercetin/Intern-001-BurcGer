import { Component, OnInit, inject } from '@angular/core';
import { 
  Firestore, 
  query, 
  collection, 
  getDocs,
  doc, 
  updateDoc } from '@angular/fire/firestore';
import { FormBuilder, FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.page.html',
  styleUrls: ['./edit-comment.page.scss'],
})
export class EditCommentPage implements OnInit {

  private firestore: Firestore = inject(Firestore);
  public alertButtons = ['Uptaded'];
  zodiacComment: any[]=[]; 
  //zodiacSub: Subscription;

  form = this.formBuilder.group({
    title: new FormControl(''),
    commentType: new FormControl(''),
    photoUrl: new FormControl(''),
    comment: new FormControl(''),
    zodiac: new FormControl('')
  })
  
  constructor(private formBuilder: FormBuilder) {
    const zodiacCommentCollection = collection(this.firestore, 'zodiac-comment');
    const zodiacCommentQuery = query(zodiacCommentCollection) as any;
  
    getDocs(zodiacCommentQuery).then(
      res=>{
        console.log(res.docs.map(doc=>doc.data()))
        this.zodiacComment = res.docs.map(doc=>doc.data())
        //console.log(this.zodiacComment)
        this.form.patchValue(this.zodiacComment[0])
      }
    )

    // //subscribe({
    //   next: res=>{
    //     console.log(res);
    //   },
    //   error: err=>{
    //     console.log(err);
    //   },
    //   complete: ()=>{

    //   }
    // })

  }

  ngOnInit() {
  }

  updateData(){
    const docInstance = doc(this.firestore, 'zodiac-comment', 'fyPqsn656j90qyq9tLBX')
    console.log(this.form.value)
    updateDoc(docInstance,
      this.form.value
      ).then(
       res=>{
       console.log(res)
       console.log('Update Completed')
     }).catch(
       err=>{
       console.log(err)
     })
  }
  
  // ngOnDestroy(){ //subscribe kullanılan yerlerde kullanılır.
  //   if(this.zodiacSub && !this.zodiacSub.closed){
  //     this.zodiacSub.unsubscribe();
  //   }
  // }
}
