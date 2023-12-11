import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss']
})
export class ExplorePage implements OnInit {
  constructor (private readonly router: Router) { }

  navigateToPage (page: string) {
    this.router.navigateByUrl(page)
      .then((res) => { console.log(res) })
      .catch(err => { console.log(err) })
  }

  ngOnInit () {
  }
}
