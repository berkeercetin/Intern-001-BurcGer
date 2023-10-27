import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'add-comment',
    loadChildren: () => import('./pages/add-comment/add-comment.module').then( m => m.AddCommentPageModule)
  },
  {
    path: 'comment-panel',
    loadChildren: () => import('./pages/comment-panel/comment-panel.module').then( m => m.CommentPanelPageModule)
  },
  {
    path: 'edit-comment',
    loadChildren: () => import('./pages/edit-comment/edit-comment.module').then( m => m.EditCommentPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
