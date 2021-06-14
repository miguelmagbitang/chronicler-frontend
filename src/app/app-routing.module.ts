import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvatarContainerComponent } from './avatar/avatar-container/avatar-container.component';
import { HomeContainerComponent } from './home/home-container/home-container.component';
import { PostContainerComponent } from './posts/post-container/post-container.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { PostEditorComponent } from './posts/post-editor/post-editor.component';

const routes: Routes = [
  { path: '', component: HomeContainerComponent },
  { path: 'posts', component: PostContainerComponent },
  { path: 'posts/new', component: PostEditorComponent },
  { path: 'posts/:id', component: PostDetailComponent },
  { path: 'posts/:id/edit', component: PostEditorComponent},
  { path: 'avatar', component: AvatarContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
