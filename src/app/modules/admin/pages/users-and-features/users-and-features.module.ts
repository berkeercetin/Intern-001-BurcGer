import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsersAndFeaturesPageRoutingModule } from './users-and-features-routing.module';

import { UsersAndFeaturesPage } from './users-and-features.page';
import { FilterPipe } from '../../shared/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsersAndFeaturesPageRoutingModule
  ],
  declarations: [UsersAndFeaturesPage, FilterPipe]
})
export class UsersAndFeaturesPageModule {}
