import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgIconsModule } from '@ng-icons/core';
import { featherEdit3, featherTrash2, featherThumbsUp } from '@ng-icons/feather-icons';

import { AppComponent } from './app.component';
import { CommentComponent } from './comment/comment.component';
import { HeaderComponent } from './header/header.component';
import { PostComponent } from './post/post.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AvatarComponent } from './avatar/avatar.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    HeaderComponent,
    SidebarComponent,
    CommentComponent,
    AvatarComponent
  ],
  imports: [
    BrowserModule,
    NgIconsModule.withIcons({ featherEdit3, featherThumbsUp, featherTrash2 }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
