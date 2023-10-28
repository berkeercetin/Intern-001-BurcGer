import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatorsPageRoutingModule } from './creators-routing.module';

import { CreatorsPage } from './creators.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatorsPageRoutingModule
  ],
  declarations: [CreatorsPage]
})
export class CreatorsPageModule {}
