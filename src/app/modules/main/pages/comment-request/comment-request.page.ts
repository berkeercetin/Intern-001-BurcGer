import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-comment-request',
  templateUrl: './comment-request.page.html',
  styleUrls: ['./comment-request.page.scss']
})
export class CommentRequestPage implements OnInit {
  constructor (private readonly router: Router) {}

  navigateToPage (page: string) {
    this.router.navigateByUrl(page).then((res) => { console.log(res) }).catch(err => { console.log(err) })
  }

  ngOnInit () {
  }
}
