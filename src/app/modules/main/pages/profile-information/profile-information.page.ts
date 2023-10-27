import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile-information',
  templateUrl: './profile-information.page.html',
  styleUrls: ['./profile-information.page.scss'],
})
export class ProfileInformationPage implements OnInit {
  user: any

  constructor(private userService: UserService) { }

  ngOnInit() {this.fetchUser()}

  async fetchUser(){
   const docSnap = this.userService.getUser()
   if ((await docSnap).exists()) {
    console.log("Document data:", (await docSnap).data());
    this.user=(await docSnap).data()
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
  }

}
