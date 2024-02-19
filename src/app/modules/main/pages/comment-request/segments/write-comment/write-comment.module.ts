import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WriteCommentPageRoutingModule } from './write-comment-routing.module';

import { WriteCommentPage } from './write-comment.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WriteCommentPageRoutingModule
  ],
  declarations: [WriteCommentPage]
})
export class WriteCommentPageModule {}
