import { Component, OnInit } from '@angular/core'
import { UserService } from '../../services/user.service'
import { LoadingController } from '@ionic/angular'

@Component({
  selector: 'app-app-feedback',
  templateUrl: './app-feedback.page.html',
  styleUrls: ['./app-feedback.page.scss']
})
export class AppFeedbackPage implements OnInit {
  feedbacks: any
  userInfo: any

  constructor (private readonly userService: UserService,
    private readonly loadingController: LoadingController
  ) {
  }

  ionViewWillEnter () {
    this.loadingController.create(
      {
        message: 'Yükleniyor...',
        spinner: 'crescent',
        animated: true
      }
    ).then(res => {
      res.present()
      this.getFeedbacks()
        .finally(() => {
          this.loadingController.dismiss()
        })
    })
  }

  async getFeedbacks () {
    await this.userService.getFeedbacks().then(res => {
      console.log(res.docs.map(doc => doc.data()))
      this.feedbacks = res.docs.map(doc => doc.data())
    })
  }

  getCustomUser (uid: string) {
    this.userService.getUserById(uid).then(res => {
      this.userInfo = res.docs.map(doc => doc.data())
    })
  }

  ngOnInit () {
  }
}
