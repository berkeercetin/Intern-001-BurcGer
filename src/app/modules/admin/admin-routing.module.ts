import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AdminPage } from './admin.page'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'add-comment',
    loadChildren: () => import('./pages/add-comment/add-comment.module').then(m => m.AddCommentPageModule)
  },
  {
    path: 'comment-panel',
    loadChildren: () => import('./pages/comment-panel/comment-panel.module').then(m => m.CommentPanelPageModule)
  },
  {
    path: 'edit-comment/:commentID',
    loadChildren: () => import('./pages/edit-comment/edit-comment.module').then(m => m.EditCommentPageModule)
  },
  {
    path: 'users-and-features',
    loadChildren: () => import('./pages/users-and-features/users-and-features.module').then(m => m.UsersAndFeaturesPageModule)
  },
  {
    path: 'comments',
    loadChildren: () => import('./pages/comments/comments.module').then(m => m.CommentsPageModule)
  },  {
    path: 'comment-feedback',
    loadChildren: () => import('./pages/comment-feedback/comment-feedback.module').then( m => m.CommentFeedbackPageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./pages/feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'app-feedback',
    loadChildren: () => import('./pages/app-feedback/app-feedback.module').then( m => m.AppFeedbackPageModule)
  },
  {
    path: 'send-notification',
    loadChildren: () => import('./pages/send-notification/send-notification.module').then( m => m.SendNotificationPageModule)
  }


]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPageRoutingModule {}
