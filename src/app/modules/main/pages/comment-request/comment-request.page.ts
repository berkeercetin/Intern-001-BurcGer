import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-comment-request',
  templateUrl: './comment-request.page.html',
  styleUrls: ['./comment-request.page.scss'],
})
export class CommentRequestPage implements OnInit {

  constructor(private router: Router) {}

  navigateToPage(page: string) {
    this.router.navigateByUrl(page);
  }

  ngOnInit() {
  }

}
