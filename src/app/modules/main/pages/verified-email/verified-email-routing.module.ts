import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifiedEmailPage } from './verified-email.page';

const routes: Routes = [
  {
    path: '',
    component: VerifiedEmailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifiedEmailPageRoutingModule {}
