import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyCommentsPageRoutingModule } from './my-comments-routing.module';

import { MyCommentsPage } from './my-comments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MyCommentsPageRoutingModule
  ],
  declarations: [MyCommentsPage]
})
export class MyCommentsPageModule {}
