import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommentPanelPageRoutingModule } from './comment-panel-routing.module';

import { CommentPanelPage } from './comment-panel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommentPanelPageRoutingModule
  ],
  declarations: [CommentPanelPage]
})
export class CommentPanelPageModule {}
