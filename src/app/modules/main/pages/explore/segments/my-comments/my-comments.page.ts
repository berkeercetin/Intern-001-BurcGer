import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-my-comments',
  templateUrl: './my-comments.page.html',
  styleUrls: ['./my-comments.page.scss']
})
export class MyCommentsPage implements OnInit {
  isDropdownOpen: boolean = false
  isDropdownOpen2: boolean = false

  constructor () { }

  toggleDropdown () {
    this.isDropdownOpen = !this.isDropdownOpen
  }

  toggleDropdown2 () {
    this.isDropdownOpen2 = !this.isDropdownOpen2
  }

  ngOnInit () {
  }
}
