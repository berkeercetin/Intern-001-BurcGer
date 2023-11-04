import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AlertController, LoadingController } from '@ionic/angular'
import { AuthService } from '../../services/auth.service'
import { UserService } from '../../services/user.service'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { UserModel } from '../../models/usermodel'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit {
  registerForm!: FormGroup
  isChecked = false
  user!: UserModel
  get errorControl () {
    return this.registerForm.controls
  }

  constructor (private readonly authservice: AuthService,
    private readonly router: Router,
    private readonly alertController: AlertController,
    private readonly loadingController: LoadingController,
    public userService: UserService) { }

  ngOnInit () {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      surname: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      passwordagain: new FormControl('', [Validators.required, Validators.minLength(6)]),
      gender: new FormControl('', [Validators.required]),
      birthPlace: new FormControl('', [Validators.required]),
      birthTime: new FormControl('', [Validators.required]),
      relation: new FormControl('', [Validators.required]),
      job: new FormControl('', [Validators.required]),
      photoUrl: new FormControl('')
    }, {
      validators: MustMatch('password', 'passwordagain') as any
    })
  }

  async presentAlert (err: any) {
    const alert = await this.alertController.create({
      header: 'Lütfen Tüm Bilgileri Doldurunuz.',
      message: err,
      buttons: ['Tamam']
    })
    await alert.present()
  }

  submitForm (input: HTMLInputElement) {
    console.log(this.registerForm.value)
    console.log(this.registerForm.valid)
    if (this.registerForm.valid) {
      this.loadingController.create({
        message: 'Kayit Yapiliyor...',
        spinner: 'crescent',
        animated: true
      }).then(res => { res.present() })
      const userData = new UserModel(this.registerForm.value)
      this.userService.uploadFile(input).then(res => {
        userData.photoUrl = res
        console.log(userData)
        this.authservice.signup(this.registerForm.value.email, this.registerForm.value.password, userData)
          .then(
            () => this.router.navigateByUrl('/main/home')
          ).catch(
            err => { console.log(err) }
          ).finally(
            // eslint-disable-next-line @typescript-eslint/no-misused-promises, @typescript-eslint/promise-function-async
            () => this.loadingController.dismiss()
          )
      })
    }
  }
}

function MustMatch (password: string, passwordagain: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[password]
    const matchingControl = formGroup.controls[passwordagain]
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
      return
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true })
    } else {
      matchingControl.setErrors(null)
    }
  }
}
