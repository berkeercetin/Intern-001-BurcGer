import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommentFeedbackPageRoutingModule } from './comment-feedback-routing.module';

import { CommentFeedbackPage } from './comment-feedback.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommentFeedbackPageRoutingModule
  ],
  declarations: [CommentFeedbackPage]
})
export class CommentFeedbackPageModule {}
