import { Component, Input, OnInit } from '@angular/core'
import { ModalController } from '@ionic/angular'
import { CommentService } from '../../services/comment.service'
import { CommentModel } from '../../models/comment.model'
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-write-comment',
  templateUrl: './write-comment.page.html',
  styleUrls: ['./write-comment.page.scss']
})
export class WriteCommentPage implements OnInit {
  @Input() data: CommentModel = {
    commentWriterUid: undefined,
    commentTitle: undefined,
    commentZodiac: undefined,
    commentType: undefined,
    commentWriteDate: undefined,
    commentText: undefined,
    commentDay: undefined,
    commentWeek: undefined,
    commentMonth: undefined,
    commentYear: undefined,
    burImg: []
  }

  now = new Date()
  commentForm!: FormGroup
  selectedOption: string | undefined
  selectedOptionZodiac: string | undefined
  selectedTextType: string = 'Burç Türünü Seçin'
  selectedTextZodiac: string = 'Burcu Seçin'
  constructor (public fb: FormBuilder, private readonly modalController: ModalController, private readonly commentService: CommentService) {
  }

  ngOnInit () {
    this.commentData()
  }

  commentData () {
    this.commentForm = this.fb.group({
      commentWriterUid: "asd",
      commentRequesterUid: "asd",
      commentTitle: this.data.commentTitle,
      commentZodiac: [''],
      commentType: [''],
      commentWriteDate: this.now.toLocaleDateString(),
      commentText: this.data.commentText,
      commentDay: this.data.commentDay,
      commentWeek: this.data.commentWeek,
      commentMonth: this.data.commentMonth,
      commentYear: this.data.commentYear,
      burImg: this.data.burImg
    })
  }

  async addComment (save: boolean) {
    this.commentService.addComments(this.commentForm.value)
      .then((res) => { console.log(res) })
      .catch(err => { console.log(err) })
    console.log(this.commentForm.value)
    this.modalDismiss(save)
      .then((res) => { console.log(res) })
      .catch(err => { console.log(err) })
  }

  public pickerColumns = [
    {
      name: 'languages',
      options: [
        {
          text: 'Günlük',
          value: 'daily'
        },
        {
          text: 'Haftalık',
          value: 'weekly'
        },
        {
          text: 'Aylık',
          value: 'monthly'
        },
        {
          text: 'Yıllık',
          value: 'yearly'
        }
      ]
    }
  ]

  public pickerButtons = [
    {
      text: 'Cancel',
      role: 'cancel'
    },
    {
      text: 'Confirm',
      handler: (value: any) => {
        this.commentForm.get('commentType')?.setValue(value.languages.value)
        this.selectedOption = value.languages.value
        this.selectedTextType = value.languages.text
        console.log(`You selected: ${value.languages.value}`)
      }
    }
  ]

  public pickerColumnsZodiac = [
    {
      name: 'Zodiacs',
      options: [
        {
          text: 'Koç',
          value: 'koc'
        },
        {
          text: 'Boğa',
          value: 'boga'
        },
        {
          text: 'İkizler',
          value: 'ikizler'
        },
        {
          text: 'Yengeç',
          value: 'yengec'
        },
        {
          text: 'Aslan',
          value: 'aslan'
        },
        {
          text: 'Başak',
          value: 'basak'
        },
        {
          text: 'Terazi',
          value: 'terazi'
        },
        {
          text: 'Akrep',
          value: 'akrep'
        },
        {
          text: 'Yay',
          value: 'yay'
        },
        {
          text: 'Oğlak',
          value: 'oglak'
        },
        {
          text: 'Kova',
          value: 'kova'
        },
        {
          text: 'Balık',
          value: 'balık'
        }
      ]
    }
  ]

  public pickerButtonsZodiac = [
    {
      text: 'Cancel',
      role: 'cancel'
    },
    {
      text: 'Confirm',
      handler: (value: any) => {
        this.commentForm.get('commentZodiac')?.setValue(value.Zodiacs.value)
        this.selectedOptionZodiac = value.Zodiacs.value
        this.selectedTextZodiac = value.Zodiacs.text
        console.log(`You selected: ${value.Zodiacs.value}`)
      }
    }
  ]

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
