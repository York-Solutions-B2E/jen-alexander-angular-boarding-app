import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDogComponent } from './add-dog/add-dog.component';
import { DogListComponent } from './dog-list/dog-list.component';
import { DogDetailsComponent } from './dog-details/dog-details.component';



@NgModule({
  declarations: [
    AddDogComponent,
    DogListComponent,
    DogDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DogModule { }
