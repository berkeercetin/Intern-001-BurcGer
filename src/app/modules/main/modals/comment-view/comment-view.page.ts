import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavParams, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-comment-view',
  templateUrl: './comment-view.page.html',
  styleUrls: ['./comment-view.page.scss'],
})
export class CommentViewPage implements OnInit {
  @ViewChild('popover') popover:any
  @Input() burcTitle!:string
  @Input() burcText!:string
  @Input() burcImg!:string
  isOpen = false;


  constructor(private readonly modalController:ModalController,
    private readonly navParams: NavParams,
    ) {
      this.burcTitle = this.navParams.get('title');
      this.burcText = this.navParams.get('text');
      this.burcImg = this.navParams.get('img');
    }

  ngOnInit() {
  }


  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
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
