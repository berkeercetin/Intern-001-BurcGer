import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children:[
      {
        path: 'register',
        loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
      },
      {
        path: 'forgot-password',
        loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
      },
      {
        path: 'profile-information',
        loadChildren: () => import('./pages/profile-information/profile-information.module').then( m => m.ProfileInformationPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'comment-request',
        loadChildren: () => import('./pages/comment-request/comment-request.module').then( m => m.CommentRequestPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
