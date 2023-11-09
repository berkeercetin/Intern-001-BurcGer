import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileInformationPageRoutingModule } from './profile-information-routing.module';

import { ProfileInformationPage } from './profile-information.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileInformationPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ProfileInformationPage]
})
export class ProfileInformationPageModule {}
