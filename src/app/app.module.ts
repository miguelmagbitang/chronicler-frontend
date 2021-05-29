import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatMomentDateModule} from '@angular/material-moment-adapter'; 
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSliderModule} from '@angular/material/slider';


import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderContainerComponent } from './header/header-container/header-container.component';
import { PostContainerComponent } from './posts/post-container/post-container.component';
import { PostComponentComponent } from './posts/post-component/post-component.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterContainerComponent } from './posts/filter-container/filter-container.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { HomeContainerComponent } from './home/home-container/home-container.component';
import { AvatarContainerComponent } from './avatar/avatar-container/avatar-container.component';
import { PostEditComponent } from './posts/post-edit/post-edit.component';
import { PostNewComponent } from './posts/post-new/post-new.component';
import { FormsModule } from '@angular/forms';
import { PostEditorComponent } from './posts/post-editor/post-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderContainerComponent,
    PostContainerComponent,
    PostComponentComponent,
    FilterContainerComponent,
    PostListComponent,
    PostDetailComponent,
    HomeContainerComponent,
    AvatarContainerComponent,
    PostEditComponent,
    PostNewComponent,
    PostEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatSidenavModule,
    MatSelectModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatMomentDateModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatBadgeModule,
    MatTabsModule,
    MatSliderModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    CKEditorModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
