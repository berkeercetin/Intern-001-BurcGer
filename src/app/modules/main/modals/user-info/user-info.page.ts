import { Component, OnInit } from '@angular/core'
import { ModalController } from '@ionic/angular'

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.page.html',
  styleUrls: ['./user-info.page.scss']
})
export class UserInfoPage implements OnInit {
  a = 1
  constructor (private readonly modalController: ModalController) {}

  ngOnInit () {
  }

  async dismiss () {
    this.modalController.dismiss(this.a).then((res) => { console.log(res) }).catch(err => { console.log(err) })
  }
}
