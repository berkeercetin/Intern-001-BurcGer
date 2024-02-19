import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { CommentService } from '../../services/comment.service';
import { CommentReqModel } from '../../models/commentReq.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GlobalService } from 'src/app/shared/global.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.page.html',
  styleUrls: ['./user-info.page.scss'],
})
export class UserInfoPage implements OnInit {
  @ViewChild('popover') popover:any
  @Input() user: any
  @Input() commentReqModel: CommentReqModel = {}
  a = 1
  price: any
  selectedTextType: string | undefined
  isDropdownOpen: boolean = false
  isOpen = false;
  now = new Date()

  constructor(
    private readonly modalController: ModalController,
    private readonly navParams: NavParams,
    private readonly commentService: CommentService,
    private readonly globalService: GlobalService,
    private readonly formBuilder:FormBuilder
  ) {
    this.selectedTextType = this.pickerColumns[0].options[0].text;
    this.price = this.pickerColumns[0].options[0].value;
    this.user = this.navParams.get('user');
  }

  async ngOnInit() {
    console.log(this.globalService.data.userID)
  }


  // commentData () {
  //   this.commentReqModel = this.formBuilder.group({
  //     commentWriterUid: this.user.uid,
  //     commentRequesterUid: this.globalService.data.user.uid,
  //     commentStar: '0.0',
  //     commentWriteDate: this.now.toLocaleDateString(),
  //     commentText: this.data.commentText,
  //     commentDay: this.data.commentDay,
  //     commentWeek: this.data.commentWeek,
  //     commentMonth: this.data.commentMonth,
  //     commentYear: this.data.commentYear,
  //     burImg: this.data.burImg
  //   })
  // }

  // requestComment() {
  //   this.commentService.addCommentRequest(asd)
  // }


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
