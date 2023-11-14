import { Component, OnInit } from '@angular/core'
import { Router, Event, NavigationStart, NavigationEnd } from '@angular/router'
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.page.html',
  styleUrls: ['./my-account.page.scss']
})
export class MyAccountPage implements OnInit {
  user!:any
  loading:boolean=false
  buttons = [
    { icon: 'fa-regular fa-user', text: 'Hesabım', route:'/main/profile-information' },
    { icon: 'fa-regular fa-gem', text: 'Premium', route:'' },
    { icon: 'fa-solid fa-coins', text: 'Jeton', route:'' },
    { icon: 'fa-solid fa-gear', text: 'Ayarlar', route:'' }
  ];

  constructor (private readonly router: Router, private readonly userService:UserService) { 
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.loading = true;
        console.log('Navigation started');
        // Additional logic can be added here
      }
  
      if (event instanceof NavigationEnd) {
        this.loading = false;
        console.log('Navigation ended');
        // Additional logic can be added here
      }
    });

  }

  
  ngOnInit () {
    this.fetchUser()
  }

  singOut () {
    this.userService.signOut()
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

  navigateToPage (page: string) {
    this.router.navigateByUrl(page)
      .then((res) => { console.log(res) })
      .catch(err => { console.log(err) })
  }
}
