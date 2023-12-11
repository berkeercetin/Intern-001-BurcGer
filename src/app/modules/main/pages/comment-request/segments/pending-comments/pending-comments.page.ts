import { Component, OnInit } from '@angular/core'
import { ModalController } from '@ionic/angular'
import { WriteCommentPage } from 'src/app/modules/main/modals/write-comment/write-comment.page'

@Component({
  selector: 'app-pending-comments',
  templateUrl: './pending-comments.page.html',
  styleUrls: ['./pending-comments.page.scss']
})
export class PendingCommentsPage implements OnInit {
  isDropdownOpen: boolean = false

  toggleDropdown () {
    this.isDropdownOpen = !this.isDropdownOpen
  }

  constructor (private readonly modalController: ModalController) { }

  ngOnInit () {
  }

  async presentModal () {
    const modal = await this.modalController.create({
      component: WriteCommentPage
    })
    void modal.present()
    const { data } = await modal.onDidDismiss()
    console.log(data)
  }
}
