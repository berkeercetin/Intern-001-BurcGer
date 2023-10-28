import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss']
})
export class MainPage implements OnInit {
  constructor (private readonly router: Router) { }

  ngOnInit () {
  }

  isLoginPage () {
    if (this.router.url === '/main/login' || this.router.url === '/main/forgot-password' || this.router.url === '/main/register') {
      return false
    } else {
      return true
    }
  }
}
