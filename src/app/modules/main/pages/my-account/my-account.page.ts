import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.page.html',
  styleUrls: ['./my-account.page.scss']
})
export class MyAccountPage implements OnInit {

  buttons = [
    { icon: 'fa-regular fa-user', text: 'Button 1' },
    { icon: 'fa-regular fa-gem', text: 'Button 2' },
    { icon: 'fa-solid fa-coins', text: 'Button 3' },
    { icon: 'fa-solid fa-gear', text: 'Button 4' }
  ];

  constructor (private readonly router: Router) { }

  navigateToHome (home: string) {
    this.router.navigateByUrl(home)
      .then((res) => { console.log(res) })
      .catch(err => { console.log(err) })
  }

  ngOnInit () {
  }
}
