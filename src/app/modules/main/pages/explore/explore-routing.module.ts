import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ExplorePage } from './explore.page'

const routes: Routes = [
  {
    path: '',
    component: ExplorePage,
    children: [
      {
        path: '',
        // eslint-disable-next-line @typescript-eslint/promise-function-async
        loadChildren: () => import('./segments/creators/creators.module').then(m => m.CreatorsPageModule)
      },
      {
        path: 'my-comments',
        // eslint-disable-next-line @typescript-eslint/promise-function-async
        loadChildren: () => import('./segments/my-comments/my-comments.module').then(m => m.MyCommentsPageModule)
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExplorePageRoutingModule {}
