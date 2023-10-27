import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-write-comment',
  templateUrl: './write-comment.page.html',
  styleUrls: ['./write-comment.page.scss'],
})
export class WriteCommentPage implements OnInit {

  isDropdownOpen: boolean = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  isDropdownOpen2: boolean = false;

  toggleDropdown2() {
    this.isDropdownOpen2 = !this.isDropdownOpen2;
  }

  constructor() { }

  ngOnInit() {
  }

}
