import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { MainPage } from './main.page'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainPage,
    children: [
      {
        path: 'register',
        // eslint-disable-next-line @typescript-eslint/promise-function-async
        loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
      },
      {
        path: 'login',
        // eslint-disable-next-line @typescript-eslint/promise-function-async
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'forgot-password',
        // eslint-disable-next-line @typescript-eslint/promise-function-async
        loadChildren: () => import('./pages/forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
      },
      {
        path: 'profile-information',
        // eslint-disable-next-line @typescript-eslint/promise-function-async
        loadChildren: () => import('./pages/profile-information/profile-information.module').then(m => m.ProfileInformationPageModule)
      },
      {
        path: 'home',
        // eslint-disable-next-line @typescript-eslint/promise-function-async
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'comment-request',
        // eslint-disable-next-line @typescript-eslint/promise-function-async
        loadChildren: () => import('./pages/comment-request/comment-request.module').then(m => m.CommentRequestPageModule)
      },
      {
        path: 'explore',
        // eslint-disable-next-line @typescript-eslint/promise-function-async
        loadChildren: () => import('./pages/explore/explore.module').then(m => m.ExplorePageModule)
      },
      {
        path: 'my-account',
        // eslint-disable-next-line @typescript-eslint/promise-function-async
        loadChildren: () => import('./pages/my-account/my-account.module').then(m => m.MyAccountPageModule)
      }
    ]
  },
  {
    path: 'user-info',
    // eslint-disable-next-line @typescript-eslint/promise-function-async
    loadChildren: () => import('./modals/user-info/user-info.module').then(m => m.UserInfoPageModule)
  },
  {
    path: 'write-comment',
    // eslint-disable-next-line @typescript-eslint/promise-function-async
    loadChildren: () => import('./modals/write-comment/write-comment.module').then(m => m.WriteCommentPageModule)
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule {}
