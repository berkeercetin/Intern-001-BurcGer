import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pending-comments',
  templateUrl: './pending-comments.page.html',
  styleUrls: ['./pending-comments.page.scss'],
})
export class PendingCommentsPage implements OnInit {

  isDropdownOpen: boolean = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  constructor() { }

  ngOnInit() {
  }

}
