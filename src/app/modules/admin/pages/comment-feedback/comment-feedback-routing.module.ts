import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommentFeedbackPage } from './comment-feedback.page';

const routes: Routes = [
  {
    path: '',
    component: CommentFeedbackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommentFeedbackPageRoutingModule {}
