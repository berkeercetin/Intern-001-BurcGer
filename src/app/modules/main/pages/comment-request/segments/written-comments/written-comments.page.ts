import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-written-comments',
  templateUrl: './written-comments.page.html',
  styleUrls: ['./written-comments.page.scss']
})
export class WrittenCommentsPage implements OnInit {
  isDropdownOpen: boolean = false

  toggleDropdown () {
    this.isDropdownOpen = !this.isDropdownOpen
  }

  constructor () {

  }

  ngOnInit () {
  }
}
