import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OwnerModule } from './components/owner/owner.module';
import { Navbar } from './shared/navbar/navbar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwnerModule,
    Navbar,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
