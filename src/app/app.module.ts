import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgIconsModule } from '@ng-icons/core';
import { featherEdit3 } from '@ng-icons/feather-icons';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostComponent } from './post/post.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    NgIconsModule.withIcons({ featherEdit3 }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
