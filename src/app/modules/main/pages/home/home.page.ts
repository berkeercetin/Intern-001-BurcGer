import { Component, OnInit } from '@angular/core'
import { UserService } from '../../services/user.service'
import { Router } from '@angular/router'
import { ModalController } from '@ionic/angular'
import { CommentViewPage } from '../../modals/comment-view/comment-view.page'
import { MyAccountPage } from '../../modals/my-account/my-account.page'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  user: any
  constructor (private readonly modalController:ModalController, private readonly userService: UserService, private readonly router:Router) { }

  ngOnInit () { this.fetchUser() }

  navigateToPage (page: string) {
    this.router.navigateByUrl(page).then((res) => { console.log(res) }).catch(err => { console.log(err) })
  }
  async commentViewModal () {
    const modal = await this.modalController.create({
      component:  CommentViewPage
    })
    void modal.present()
    const { data } = await modal.onDidDismiss()
    console.log(data)
  }
  async commentViewModal2 () {
    const modal = await this.modalController.create({
      component:  MyAccountPage
    })
    void modal.present()
    const { data } = await modal.onDidDismiss()
    console.log(data)
  }

  async fetchUser () {
    const docSnap = this.userService.getUser()
    if ((await docSnap).exists()) {
      //console.log('Document data:', (await docSnap).data())
      this.user = (await docSnap).data()
    } else {
    // docSnap.data() will be undefined in this case
      //console.log('No such document!')
    }
  }
}
