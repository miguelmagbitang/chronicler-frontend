import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvatarContainerComponent } from './avatar/avatar-container/avatar-container.component';
import { HomeContainerComponent } from './home/home-container/home-container.component';
import { PostContainerComponent } from './posts/post-container/post-container.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { PostEditComponent } from './posts/post-edit/post-edit.component';
import { PostNewComponent } from './posts/post-new/post-new.component';

const routes: Routes = [
  { path: '', component: HomeContainerComponent },
  { path: 'posts', component: PostContainerComponent },
  { path: 'posts/new', component: PostEditComponent },
  { path: 'posts/:id', component: PostDetailComponent },
  { path: 'posts/:id/edit', component: PostEditComponent},
  { path: 'avatar', component: AvatarContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
