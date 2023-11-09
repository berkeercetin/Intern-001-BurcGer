import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { AuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard'

// const redirectUnauthorizedToHome = () => redirectUnauthorizedTo([''])
// const redirectLoggedInToAccount = () => redirectLoggedInTo(['/main/home'])


const routes: Routes = [

  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    // canActivate: [AuthGuard],
    // data: { authGuardPipe: redirectLoggedInToAccount },
    loadChildren: () => import('./modules/admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'main',
    // canActivate: [AuthGuard],
    // data: { authGuardPipe: redirectUnauthorizedToHome },
    loadChildren: () => import('./modules/main/main.module').then( m => m.MainPageModule)
  },
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
