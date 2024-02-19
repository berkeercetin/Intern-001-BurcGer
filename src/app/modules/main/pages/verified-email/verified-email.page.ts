import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-verified-email',
  templateUrl: './verified-email.page.html',
  styleUrls: ['./verified-email.page.scss'],
})
export class VerifiedEmailPage implements OnInit {
  mode = this.route.snapshot.queryParams['mode']
  code = this.route.snapshot.queryParams['oobcode']
  referanceNumber?: number
  isVerified?: boolean
  constructor(private router: Router, private userService: UserService, private authService: AuthService, private route: ActivatedRoute) { }

  resend(){
    this.authService.resend().then((res) => console.log(res)).catch((err)=>console.log(err))
  }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams['oobCode'])
    this.authService.verifiedEmail(this.route.snapshot.queryParams['oobCode']).then((res)=>{
      console.log(res)
      const min = 100000;
      const max = 999999;
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      this.userService.updateUser({referanceNumber: randomNumber }).then((res)=>{
        this.referanceNumber = randomNumber
        this.isVerified = true
        console.log(res)}).catch(
        (err) => console.log(err)
      )
      
    }).catch((err) => {
      this.isVerified = false
      console.log(err)
    })
  }

}
