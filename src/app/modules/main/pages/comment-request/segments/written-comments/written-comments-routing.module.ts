import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WrittenCommentsPage } from './written-comments.page';

const routes: Routes = [
  {
    path: '',
    component: WrittenCommentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WrittenCommentsPageRoutingModule {}
