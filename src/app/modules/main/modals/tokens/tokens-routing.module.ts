import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TokensPage } from './tokens.page';

const routes: Routes = [
  {
    path: '',
    component: TokensPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TokensPageRoutingModule {}
