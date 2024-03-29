import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { MainPage } from './main.page'
import { AuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard'

const redirectUnauthorizedToHome = () => redirectUnauthorizedTo(['/main/login'])
const redirectLoggedInToAccount = () => redirectLoggedInTo(['/main/home'])

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainPage,
    children: [
      {
        path: 'register',
        canActivate: [AuthGuard],
        data: { authGuardPipe: redirectLoggedInToAccount },
        // eslint-disable-next-line @typescript-eslint/promise-function-async
        loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
      },
      {
        path: 'login',
        canActivate: [AuthGuard],
        data: { authGuardPipe: redirectLoggedInToAccount },
        // eslint-disable-next-line @typescript-eslint/promise-function-async
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'forgot-password',
        canActivate: [AuthGuard],
        data: { authGuardPipe: redirectLoggedInToAccount },
        // eslint-disable-next-line @typescript-eslint/promise-function-async
        loadChildren: () => import('./pages/forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
      },
      {
        path: 'profile-information',
        canActivate: [AuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToHome },
        // eslint-disable-next-line @typescript-eslint/promise-function-async
        loadChildren: () => import('./pages/profile-information/profile-information.module').then(m => m.ProfileInformationPageModule)
      },
      {
        path: 'home',
        canActivate: [AuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToHome },
        // eslint-disable-next-line @typescript-eslint/promise-function-async
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'comment-request',
        canActivate: [AuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToHome },
        // eslint-disable-next-line @typescript-eslint/promise-function-async
        loadChildren: () => import('./pages/comment-request/comment-request.module').then(m => m.CommentRequestPageModule)
      },
      {
        path: 'explore',
        canActivate: [AuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToHome },
        // eslint-disable-next-line @typescript-eslint/promise-function-async
        loadChildren: () => import('./pages/explore/explore.module').then(m => m.ExplorePageModule)
      },
      {
        path: 'my-account',
        // eslint-disable-next-line @typescript-eslint/promise-function-async
        loadChildren: () => import('./modals/my-account/my-account.module').then(m => m.MyAccountPageModule)
      } ,
      {
        path: 'verified-email',
        loadChildren: () => import('./pages/verified-email/verified-email.module').then( m => m.VerifiedEmailPageModule)
      },
      {
        path: 'notification',
        loadChildren: () => import('./pages/notification/notification.module').then( m => m.NotificationPageModule)
},{
        path: 'zodiac-information',
        canActivate: [AuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToHome },
        loadChildren: () => import('./pages/zodiac-information/zodiac-information.module').then( m => m.ZodiacInformationPageModule)
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
  },

  {
    path: 'comment-view',
    loadChildren: () => import('./modals/comment-view/comment-view.module').then( m => m.CommentViewPageModule)
  },
  {
    path: 'zodiac-information',
    loadChildren: () => import('./pages/zodiac-information/zodiac-information.module').then( m => m.ZodiacInformationPageModule)
  },
  {
    path: 'tokens',
    loadChildren: () => import('./modals/tokens/tokens.module').then( m => m.TokensPageModule)
  },
  {
    path: 'share-and-win',
    loadChildren: () => import('./modals/share-and-win/share-and-win.module').then( m => m.ShareAndWinPageModule)
  },
  {
    path: 'premium',
    loadChildren: () => import('./modals/premium/premium.module').then( m => m.PremiumPageModule)
  },


]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule {}
