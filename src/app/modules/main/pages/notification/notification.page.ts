import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MyAccountPage } from '../../modals/my-account/my-account.page';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  constructor(private readonly modalController:ModalController) { }

  ngOnInit() {
  }

  async myProfile () {
    const modal = await this.modalController.create({
      component:  MyAccountPage
    })
    void modal.present()
    const { data } = await modal.onDidDismiss()
    console.log(data)
  }
}
