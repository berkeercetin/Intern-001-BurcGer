import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavParams, PickerController } from '@ionic/angular';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.page.html',
  styleUrls: ['./user-info.page.scss'],
})
export class UserInfoPage implements OnInit {
  @ViewChild('popover') popover:any
  @Input() user: any
  a = 1
  price: any
  selectedTextType: string | undefined
  isDropdownOpen: boolean = false
  isOpen = false;

  constructor(
    private readonly modalController: ModalController,
    private navParams: NavParams,
    private readonly pickerCtrl: PickerController
  ) {
    this.selectedTextType = this.pickerColumns[0].options[0].text;
    this.price = this.pickerColumns[0].options[0].value;
    this.user = this.navParams.get('user');
  }

  ngOnInit() {
  }



  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }

  toggleDropdown () {
    this.isDropdownOpen = !this.isDropdownOpen
  }
  public pickerColumns = [
    {
      name: 'order',
      options: [
        {
          text: 'Günlük',
          value: '15.48',
        },
        {
          text: 'Aylık',
          value: '15.85',
        },
        {
          text: 'Yıllık',
          value: '15.85',
        },
      ],
    },
  ];

  public pickerButtons = [
    {
      text: 'İptal',
      role: 'cancel',
    },
    {
      text: 'Onayla',
      handler: (value: any) => {
        this.selectedTextType = value.order.text
        this.price = value.order.value
        console.log(`You selected a ${value.order.value}`)
      },
    },
  ];

  async dismiss() {
    this.modalController
      .dismiss(this.a)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
