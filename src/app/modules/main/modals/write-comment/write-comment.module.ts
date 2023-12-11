import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WriteCommentPageRoutingModule } from './write-comment-routing.module';

import { WriteCommentPage } from './write-comment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    WriteCommentPageRoutingModule
  ],
  declarations: [WriteCommentPage]
})
export class WriteCommentPageModule {}
