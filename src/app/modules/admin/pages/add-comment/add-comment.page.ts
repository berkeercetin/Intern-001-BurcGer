import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.page.html',
  styleUrls: ['./add-comment.page.scss'],
})
export class AddCommentPage implements OnInit {
  public alertButtons = ['Added'];

  constructor() { }

  ngOnInit() {
  }

}