import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-premium',
  templateUrl: './premium.page.html',
  styleUrls: ['./premium.page.scss'],
})
export class PremiumPage implements OnInit {
  @Input() isPremium!: boolean; // This should match the property name in your modalProps
  isSelected: boolean = false;
  items: any[] = [];
  isButtonSelected: boolean[] = new Array(this.items.length).fill(false);

  constructor(
    private readonly modalController: ModalController,
    private readonly navParams: NavParams
  ) {
    this.isPremium = this.navParams.get('isPremium');
    console.log(this.isPremium)
  }

  ngOnInit() {}

  premium = [
    { text: 'Yıllık', value2: '320', value: '365' },
    { text: 'Aylık', value2: '', value: '30' },
    { text: 'Haftalık', value2: '', value: '7' },
  ];

  buttonSelected(id: number): void {
    // Unselect all buttons
    this.isButtonSelected.fill(false);
    // Select the clicked button
    this.isButtonSelected[id] = true;
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
