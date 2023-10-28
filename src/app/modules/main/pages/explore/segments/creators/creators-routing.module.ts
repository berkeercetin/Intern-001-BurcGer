import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatorsPage } from './creators.page';

const routes: Routes = [
  {
    path: '',
    component: CreatorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatorsPageRoutingModule {}
