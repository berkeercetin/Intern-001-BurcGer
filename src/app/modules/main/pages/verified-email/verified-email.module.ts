import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifiedEmailPageRoutingModule } from './verified-email-routing.module';

import { VerifiedEmailPage } from './verified-email.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifiedEmailPageRoutingModule
  ],
  declarations: [VerifiedEmailPage]
})
export class VerifiedEmailPageModule {}
