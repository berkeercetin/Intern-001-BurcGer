import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zodiac-information',
  templateUrl: './zodiac-information.page.html',
  styleUrls: ['./zodiac-information.page.scss'],
})
export class ZodiacInformationPage implements OnInit {

  array = [
    {
      name: 'Koç',
    },
    {
      name: 'Boğa',
    },
    {
      name: 'İkizler',
    },
    {
      name: 'Yengeç',
    },
    {
      name: 'Aslan',
    },
    {
      name: 'Başak',
    },
    {
      name: 'Terazi',
    },
    {
      name: 'Akrep',
    },
    {
      name: 'Yay',
    },
    {
      name: 'Kova',
    },
    {
      name: 'Oğlak',
    },
    {
      name: 'Balık',
    },
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
