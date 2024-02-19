import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PendingCommentsPageRoutingModule } from './pending-comments-routing.module';

import { PendingCommentsPage } from './pending-comments.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PendingCommentsPageRoutingModule
  ],
  declarations: [PendingCommentsPage]
})
export class PendingCommentsPageModule {}
