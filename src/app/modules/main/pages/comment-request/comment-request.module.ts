import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommentRequestPageRoutingModule } from './comment-request-routing.module';

import { CommentRequestPage } from './comment-request.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommentRequestPageRoutingModule
  ],
  declarations: [CommentRequestPage]
})
export class CommentRequestPageModule {}
