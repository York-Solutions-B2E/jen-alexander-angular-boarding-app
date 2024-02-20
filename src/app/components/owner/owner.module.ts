import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { OwnerDetailsComponent } from './owner-details/owner-details.component';
import { AddOwnerComponent } from './add-owner/add-owner.component';



@NgModule({
  declarations: [
    OwnerListComponent,
    OwnerDetailsComponent,
    AddOwnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OwnerListComponent
  ]
})
export class OwnerModule { }
