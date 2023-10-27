import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user: any;
  name?:string;
  surname?:string;
  email?:string;
  password?:string
  passwordagain?:string;
  gender?:string;
  birthPlace?: string;
  birthTime?: string;
  relation?:string;
  job?:string;
  photoUrl?:string;

  constructor(private authservice:AuthService,
    private router:Router,
    private alertController:AlertController,
    public userService:UserService) { }

  ngOnInit() {
    if (this.birthTime){
      let date = new Date(this.birthTime).toISOString()
    }
  }

  register(){
    return console.log(this.name,this.surname,this.gender)
  }

  async presentAlert(err:any) {
    const alert = await this.alertController.create({
      header: 'Lütfen Tüm Bilgileri Doldurunuz.',
      message: err,
      buttons: ['Tamam'],
    });
    await alert.present();
  }

  SignUp(){
    const data = {
      name:this.name,
      surname:this.surname,
      email:this.email,
      password:this.password,
      passwordagain:this.passwordagain,
      gender:this.gender,
      birthPlace: this.birthPlace,
      birthTime: this.birthTime,
      relation:this.relation,
      job:this.job,
     }
     console.log(data)
     if (data.email && data.password)
     this.authservice.signup(data.email,data.password,data).then( 
      (user: any)=>{
        console.log(this.email,this.password);
        this.router.navigateByUrl("/main/home")
      }
    ).catch(
      (err: any)=>{this.presentAlert(err)
      console.log(err)}
    ) 
   
  }

  // ionViewWillEnter() {
  //   this.user = this.userService.userData
  // }

  event:any
  onFileSelected(event: any){
    this.event = event
    console.log(event.target.files[0])
    console.log(event)
    // this.fileUpload()
  }


  
}

