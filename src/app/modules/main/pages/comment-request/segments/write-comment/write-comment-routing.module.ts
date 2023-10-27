import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WriteCommentPage } from './write-comment.page';

const routes: Routes = [
  {
    path: '',
    component: WriteCommentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WriteCommentPageRoutingModule {}
