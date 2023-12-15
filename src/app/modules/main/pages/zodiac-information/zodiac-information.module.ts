import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZodiacInformationPageRoutingModule } from './zodiac-information-routing.module';

import { ZodiacInformationPage } from './zodiac-information.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZodiacInformationPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [ZodiacInformationPage]
})
export class ZodiacInformationPageModule {}
