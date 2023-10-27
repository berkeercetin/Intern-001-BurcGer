import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  email?:string;

  constructor(private authservice:AuthService,private router:Router,private alertController:AlertController) { }

  ngOnInit() {
  }

  async presentAlert(err:any) { 
    
    const alert = await this.alertController.create({
      header: 'Hatalı E-Mail',
      message: err,
      buttons: ['Tamam'],
    });
    await alert.present();
  }

  resetPassword(){
    if(this.email)
    this.authservice.resetPassword(this.email).then(
      ()=>this.router.navigateByUrl("/main/login")
      ).catch(
        
        err=>{console.log(err); this.presentAlert(err)}
      )
  }

}