import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShareAndWinPage } from './share-and-win.page';

const routes: Routes = [
  {
    path: '',
    component: ShareAndWinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShareAndWinPageRoutingModule {}
