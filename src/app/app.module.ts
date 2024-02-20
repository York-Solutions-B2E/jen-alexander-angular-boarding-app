import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddOwnerComponent } from './components/owner/add-owner/add-owner.component';
import { OwnerDetailsComponent } from './components/owner/owner-details/owner-details.component';
import { OwnersListComponent } from './components/owner/owners-list/owners-list.component';
import { AddDogComponent } from './components/dog/add-dog/add-dog.component';
import { DogDetailsComponent } from './components/dog/dog-details/dog-details.component';
import { DogsListComponent } from './components/dog/dogs-list/dogs-list.component';
import { AddBoardingComponent } from './components/boarding/add-boarding/add-boarding.component';
import { BoardingDetailsComponent } from './components/boarding/boarding-details/boarding-details.component';
import { BoardingsListComponent } from './components/boarding/boardings-list/boardings-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddOwnerComponent,
    OwnerDetailsComponent,
    OwnersListComponent,
    AddDogComponent,
    DogDetailsComponent,
    DogsListComponent,
    AddBoardingComponent,
    BoardingDetailsComponent,
    BoardingsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
