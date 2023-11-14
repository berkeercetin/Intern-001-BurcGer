import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-comment-view',
  templateUrl: './comment-view.page.html',
  styleUrls: ['./comment-view.page.scss'],
})
export class CommentViewPage implements OnInit {

  constructor(private readonly modalController:ModalController) { }

  ngOnInit() {
  }


  async modalDismiss (save: boolean) {
    this.modalController
      .dismiss(save)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

}
