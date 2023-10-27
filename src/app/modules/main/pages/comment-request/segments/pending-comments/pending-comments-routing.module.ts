import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PendingCommentsPage } from './pending-comments.page';

const routes: Routes = [
  {
    path: '',
    component: PendingCommentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PendingCommentsPageRoutingModule {}
