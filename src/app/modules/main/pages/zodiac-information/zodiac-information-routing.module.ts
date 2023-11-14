import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZodiacInformationPage } from './zodiac-information.page';

const routes: Routes = [
  {
    path: '',
    component: ZodiacInformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZodiacInformationPageRoutingModule {}
