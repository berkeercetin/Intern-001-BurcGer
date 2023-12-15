import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TokensPageRoutingModule } from './tokens-routing.module';

import { TokensPage } from './tokens.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TokensPageRoutingModule
  ],
  declarations: [TokensPage]
})
export class TokensPageModule {}
