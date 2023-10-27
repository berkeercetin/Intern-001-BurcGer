import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileInformationPage } from './profile-information.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileInformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileInformationPageRoutingModule {}
