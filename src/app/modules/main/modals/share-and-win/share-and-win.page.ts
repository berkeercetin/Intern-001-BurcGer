import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Clipboard } from '@capacitor/clipboard';

@Component({
  selector: 'app-share-and-win',
  templateUrl: './share-and-win.page.html',
  styleUrls: ['./share-and-win.page.scss'],
})
export class ShareAndWinPage implements OnInit {
  popoverText:string = ''
  constructor(private readonly modalController:ModalController) { }

  ngOnInit() {
  }

  copyToClipboard(text: string) {
    Clipboard.write({
      string: text
    }).then(() => {
      console.log('Text copied to clipboard:', text);
      this.popoverText='Kopyalandı!'
    }).catch((err) => {
      console.error('Error copying to clipboard:', err);
      this.popoverText='Kopyalanamadı!'
    });
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
