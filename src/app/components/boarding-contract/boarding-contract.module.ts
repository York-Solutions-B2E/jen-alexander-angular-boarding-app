import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddContractComponent } from './add-contract/add-contract.component';
import { ContractListComponent } from './contract-list/contract-list.component';
import { ContractDetailsComponent } from './contract-details/contract-details.component';



@NgModule({
  declarations: [
    AddContractComponent,
    ContractListComponent,
    ContractDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BoardingContractModule { }
