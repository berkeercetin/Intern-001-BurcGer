import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WrittenCommentsPageRoutingModule } from './written-comments-routing.module';

import { WrittenCommentsPage } from './written-comments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WrittenCommentsPageRoutingModule
  ],
  declarations: [WrittenCommentsPage]
})
export class WrittenCommentsPageModule {}
