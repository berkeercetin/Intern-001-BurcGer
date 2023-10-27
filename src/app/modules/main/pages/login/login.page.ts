import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email?:string;
  password?:string;

  constructor(private authservice: AuthService, private router: Router, private alertController: AlertController) { }

  ngOnInit() { }

  async presentAlert(err:any) {
    
    const alert = await this.alertController.create({
      header: 'Hatalı Giriş',
      message: err,
      buttons: ['Tamam'],
    });

    await alert.present();
  }
  

  
  logIn(){
    if (this.email && this.password)
    this.authservice.login(this.email,this.password)
      .then(()=>this.router.navigateByUrl("/main/profile-information"))
      .catch(err=>console.log(err))
  }


}
