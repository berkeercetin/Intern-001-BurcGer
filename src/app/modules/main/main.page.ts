import { Component, OnInit } from '@angular/core'
import { NavigationEnd, NavigationStart, Router } from '@angular/router'
import { UserService } from './services/user.service'
import { ModalController } from '@ionic/angular'
import { MyAccountPage } from './modals/my-account/my-account.page'
import { TokensPage } from './modals/tokens/tokens.page'

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss']
})
export class MainPage implements OnInit {
  user!:any
  showHead:boolean = true
  navigationStack: boolean[] = [];

  constructor (private readonly router: Router, private userService:UserService, private readonly modalController:ModalController) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart || event instanceof NavigationEnd) {
        if (event['url'] === 'main/login' ||
         event['url'] === '/main/forgot-password' || 
         event['url'] === '/main/notification' || 
         event['url'] === '/main/register') {
          this.showHead = false;
        } else {
          this.showHead = true
        }
      }
    });
  }

  ngOnInit () { 
    this.fetchUser() 
  }

  navigateToPage (page: string) {
    this.router.navigateByUrl(page).then((res) => { console.log(res) }).catch(err => { console.log(err) })
  }

  async fetchUser () {
    const docSnap = this.userService.getUser()
    if ((await docSnap).exists()) {
      console.log('Document data:', (await docSnap).data())
      this.user = (await docSnap).data()
    } else {
    // docSnap.data() will be undefined in this case
      console.log('No such document!')
    }
  }

  async myAccountmodal () {
    const modal = await this.modalController.create({
      component: MyAccountPage
    })
    void modal.present()
    const { data } = await modal.onDidDismiss()
    console.log(data)
  }

  async tokenModal() {
    const modal = await this.modalController.create({
      component: TokensPage
    });
    return await modal.present();
  }
}
