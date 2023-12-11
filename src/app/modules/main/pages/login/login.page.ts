import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AlertController } from '@ionic/angular'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  email?: string
  password?: string

  constructor (private readonly authservice: AuthService, private readonly router: Router, private readonly alertController: AlertController) { }

  ngOnInit () { }

  async presentAlert (err: any) {
    const alert = await this.alertController.create({
      header: 'Hatalı Giriş',
      message: err,
      buttons: ['Tamam']
    })

    await alert.present()
  }

  logIn () {
    if (this.email && this.password) {
      this.authservice.login(this.email, this.password)
        .then(async () => await this.router.navigateByUrl('/main/home'))
        .catch(err => { console.log(err) })
    }
  }
}
