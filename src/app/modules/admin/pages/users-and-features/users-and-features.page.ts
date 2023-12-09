import { Component, OnInit } from '@angular/core'
import { LoadingController } from '@ionic/angular'
import { UserModel } from 'src/app/modules/main/models/usermodel'
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-users-and-features',
  templateUrl: './users-and-features.page.html',
  styleUrls: ['./users-and-features.page.scss']
})
export class UsersAndFeaturesPage implements OnInit {
  users: any
  loading = false
  searchText = ''
  constructor (private readonly userService: UserService,
    private readonly loadingController: LoadingController
  ) {}

  ionViewWillEnter () {
    this.loadingController.create(
      {
        message: 'Yükleniyor...',
        spinner: 'crescent',
        animated: true
      }
    ).then(res => {
      res.present()
      this.getUsers().finally(() => {
        this.loadingController.dismiss()
      })
    })
  }

  async getUsers () {
    await this.userService.getUsers().then(res => {
      console.log(res.docs.map(doc => doc.data()))
      this.users = res.docs.map(doc => doc.data())
    }
    )
  }

  creator (user: UserModel) {
    this.loadingController.create({
      message: 'Kaydediliyor...',
      spinner: 'crescent',
      animated: true
    }).then(res => {
      res.present()
    })

    console.log(user)

    this.userService.updateCreator(user).then(() => {
      // this.getUsers().finally(() => {
      //   this.loadingController.dismiss()
      // })
      this.loadingController.dismiss()
    })
  }

  ngOnInit () {}
}
