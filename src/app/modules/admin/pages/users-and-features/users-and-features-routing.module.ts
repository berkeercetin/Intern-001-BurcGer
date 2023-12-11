import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersAndFeaturesPage } from './users-and-features.page';

const routes: Routes = [
  {
    path: '',
    component: UsersAndFeaturesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersAndFeaturesPageRoutingModule {}
