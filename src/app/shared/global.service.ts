import { Injectable, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { GlobalData } from './models/global.model';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {  
  private readonly _auth = inject(Auth)
  public data:GlobalData = new GlobalData()


  constructor() {   
    
this.getUser()

  }


  async getUser(){
    console.log(this._auth.currentUser)
    this.data.user = this._auth.currentUser!
  
  }
}
