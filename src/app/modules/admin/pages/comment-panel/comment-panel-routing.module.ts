import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommentPanelPage } from './comment-panel.page';

const routes: Routes = [
  {
    path: '',
    component: CommentPanelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommentPanelPageRoutingModule {}
