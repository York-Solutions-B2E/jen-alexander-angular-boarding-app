import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerListComponent } from './components/owner/owner-list/owner-list.component';
import { DogListComponent } from './components/dog/dog-list/dog-list.component';
import { ContractListComponent } from './components/boarding-contract/contract-list/contract-list.component';

const routes: Routes = [
  { path: 'owners', component: OwnerListComponent},
  { path: 'dogs', component: DogListComponent},
  { path: 'contracts', component: ContractListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
