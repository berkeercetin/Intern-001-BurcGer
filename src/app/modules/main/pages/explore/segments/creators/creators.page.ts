import { Component, OnInit } from '@angular/core'
import { ModalController } from '@ionic/angular'
import { UserInfoPage } from 'src/app/modules/main/modals/user-info/user-info.page'

@Component({
  selector: 'app-creators',
  templateUrl: './creators.page.html',
  styleUrls: ['./creators.page.scss']
})
export class CreatorsPage implements OnInit {
  constructor (private readonly modalController: ModalController) {}

  ngOnInit () {}

  async presentModal () {
    const modal = await this.modalController.create({
      component: UserInfoPage
    })
    void modal.present()
    const { data } = await modal.onDidDismiss()
    console.log(data)
  }
}
