import { Component, OnInit } from '@angular/core';
import { collection } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ZodiacModel } from '../../models/zodiac.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/global.service';
import { UserModel } from '../../models/usermodel';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-zodiac-information',
  templateUrl: './zodiac-information.page.html',
  styleUrls: ['./zodiac-information.page.scss'],
})
export class ZodiacInformationPage implements OnInit {
  zodiacForm!: FormGroup

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

  constructor(private readonly authservice: AuthService,
    private readonly router: Router,
    private globalService: GlobalService,
    private userService: UserService
    ) { }


  ngOnInit() {
    this.zodiacForm = new FormGroup({
      sun: new FormControl('', [Validators.required]),
      moon: new FormControl('', [Validators.required]),      
      home1: new FormControl('', [Validators.required]),
      home2: new FormControl('', [Validators.required]),
      home3: new FormControl('', [Validators.required]),
      home4: new FormControl('', [Validators.required]),
      home5: new FormControl('', [Validators.required]),
      home6: new FormControl('', [Validators.required]),
      home7: new FormControl('', [Validators.required]),
      home8: new FormControl('', [Validators.required]),
      home9: new FormControl('', [Validators.required]),
      home10: new FormControl('', [Validators.required]),
      home11: new FormControl('', [Validators.required]),
      home12: new FormControl('', [Validators.required]),
    })
  }

  addZodiacInformation(){
    const allFields = Object.values(this.zodiacForm.controls).map(it => it.value)
   let myUser = this.userService.getUser() as UserModel
    myUser.zodiacs = allFields
     this.authservice.addZodiacInformation(allFields, myUser)
     .then(
       () => this.router.navigateByUrl('/main/home')
     ).catch(
       err => { console.log(err) }
     )
  }

}
