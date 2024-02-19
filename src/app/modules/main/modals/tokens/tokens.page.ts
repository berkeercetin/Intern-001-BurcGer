import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ShareAndWinPage } from '../share-and-win/share-and-win.page';
import { PremiumPage } from '../premium/premium.page';
import { UserService } from '../../services/user.service';
import { UserModel } from '../../models/usermodel';

@Component({
  selector: 'app-tokens',
  templateUrl: './tokens.page.html',
  styleUrls: ['./tokens.page.scss'],
})
export class TokensPage implements OnInit {
  user : UserModel | undefined

  constructor(
    private modalController: ModalController,
    private readonly userService:UserService
  ) { }

  async ngOnInit() {
    this.userService.getUser().then(res => {
      this.user = res.data()
      console.log(this.user)
    })
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ShareAndWinPage,
    });

    return await modal.present();
  }

  async premiumModal() {
    const modal = await this.modalController.create({
      component: PremiumPage,
      componentProps: {
        isPremium:this.user?.premium
      }
    });
    return await modal.present();
  }

  async modalDismiss(save: boolean) {
    this.modalController
      .dismiss(save)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
