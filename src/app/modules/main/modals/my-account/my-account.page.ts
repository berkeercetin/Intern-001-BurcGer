import { Component, OnInit } from '@angular/core'
import { Router, NavigationStart, NavigationEnd } from '@angular/router'
import { UserService } from '../../services/user.service'
import { ModalController } from '@ionic/angular'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.page.html',
  styleUrls: ['./my-account.page.scss']
})
export class MyAccountPage implements OnInit {
  user!: any
  buttons = [
    { icon: 'fa-regular fa-user', text: 'Hesabım', route: '/main/profile-information' },
    { icon: 'fa-regular fa-gem', text: 'Premium', route: '' },
    { icon: 'fa-solid fa-coins', text: 'Jeton', route: '' },
    { icon: 'fa-solid fa-gear', text: 'Ayarlar', route: '' }
  ]

  constructor (private readonly router: Router, private readonly userService: UserService, private readonly modalController: ModalController, private readonly authService: AuthService) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        console.log('Navigation started')
        // Additional logic can be added here
      }

      if (event instanceof NavigationEnd) {
        console.log('Navigation ended')
        // Additional logic can be added here
      }
    })
  }

  async ngOnInit () {
    this.fetchUser()
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

  singOut () {
    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
    this.authService.signOut().then(() => {
      this.navigateToPage('/main/login')
    })
  }

  navigateToPage (page: string) {
    this.router.navigateByUrl(page)
      .then((res) => { console.log(res) })
      .catch(err => { console.log(err) })
    this.modalDismiss(true)
  }

  async modalDismiss (save: boolean) {
    this.modalController
      .dismiss(save)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
