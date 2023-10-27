import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommentRequestPage } from './comment-request.page';

const routes: Routes = [
  {
    path: '',
    component: CommentRequestPage,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./segments/pending-comments/pending-comments.module').then(
            (m) => m.PendingCommentsPageModule
          ),
      },
      {
        path: 'written-comments',
        loadChildren: () => import('./segments/written-comments/written-comments.module').then( m => m.WrittenCommentsPageModule)
      },
      {
        path: 'write-comment',
        loadChildren: () => import('./segments/write-comment/write-comment.module').then( m => m.WriteCommentPageModule)
      },
    ],
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommentRequestPageRoutingModule {}
