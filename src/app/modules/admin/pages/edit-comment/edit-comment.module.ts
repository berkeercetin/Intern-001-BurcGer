import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditCommentPageRoutingModule } from './edit-comment-routing.module';

import { EditCommentPage } from './edit-comment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditCommentPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditCommentPage]
})
export class EditCommentPageModule {}
