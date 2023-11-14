import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { UserService } from './services/user.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss']
})
export class MainPage implements OnInit {
  user!:any
  constructor (private readonly router: Router, private userService:UserService) {}

  ngOnInit () { 
    this.fetchUser() }

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

  isLoginPage () {
    if (
      this.router.url === '/main/login' ||
      this.router.url === '/main/forgot-password' ||
      this.router.url === '/main/register' ||
      this.router.url === '/main/my-account'
    ) {
      return false
    } else {
      return true
    }
  }
}
