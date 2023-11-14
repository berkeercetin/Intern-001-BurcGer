import { Component, OnInit } from '@angular/core'
import { UserService } from '../../services/user.service'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AlertController, LoadingController } from '@ionic/angular'
import { UserModel } from '../../models/usermodel'
import { AuthService } from '../../services/auth.service'
import { GlobalService } from 'src/app/shared/global.service'

@Component({
  selector: 'app-profile-information',
  templateUrl: './profile-information.page.html',
  styleUrls: ['./profile-information.page.scss']
})
export class ProfileInformationPage implements OnInit {
  user!: UserModel
  ionicForm!: FormGroup
  isSubmitted = false
  isEdit = false
  get errorControl () {
    return this.ionicForm.controls
  }

  constructor (private readonly userService: UserService, private readonly formBuilder: FormBuilder, public global: GlobalService,private readonly router: Router, private readonly loadingController: LoadingController,
    private readonly alertController: AlertController) {
  }

  async ngOnInit () {
    console.log(this.global.data?.user?.emailVerified)
    this.loadingController.create({
      message: 'Yükleniyor...',
      spinner: 'crescent',
      animated: true
    })
      .then(async res => { await res.present() })
    await this.fetchUser()
      .then(res => {
        this.ionicForm = new FormGroup({
          name: new FormControl(this.user.name, [Validators.required, Validators.minLength(2)]),
          surname: new FormControl(this.user.surname, [Validators.required, Validators.minLength(2)]),
          // email: new FormControl(this.user.email, [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
          gender: new FormControl(this.user.gender, [Validators.required, Validators.minLength(2)]),
          email: new FormControl(this.user.email, [Validators.required, Validators.minLength(2)]),
          relation: new FormControl(this.user.relation, [Validators.required, Validators.minLength(2)]),
          job: new FormControl(this.user.job, [Validators.required, Validators.minLength(2)]),
          birthPlace: new FormControl(this.user.birthPlace, [Validators.required, Validators.minLength(2)]),
          birthTime: new FormControl(this.user.birthTime, [Validators.required, Validators.minLength(2)])
        })
      // eslint-disable-next-line @typescript-eslint/no-misused-promises, @typescript-eslint/promise-function-async
      }).finally(() => this.loadingController.dismiss())
  }

  edit () {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    this.isEdit = !this.isEdit
  }

  submitForm () {
    this.isSubmitted = true
    console.log(this.ionicForm.value)
    if (this.ionicForm.valid) {
      console.log('if ok')
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      this.loadingController.create({
        message: 'kaydediliyor...',
        spinner: 'crescent',
        animated: true
      })
        .then(async res => { await res.present() })
      this.userService.updateUser(this.ionicForm.value).then(async res => await this.router.navigateByUrl('/main/home')).catch(
        err => { console.log(err) }
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      ).finally(() => { this.loadingController.dismiss() })
    }
  }

  async fetchUser () {
    const docSnap = this.userService.getUser()
    if ((await docSnap).exists()) {
      console.log('Document data:', (await docSnap).data())
      this.user = (await docSnap).data() as UserModel
    } else {
    // docSnap.data() will be undefined in this case
      console.log('No such document!')
    }
  }

}
