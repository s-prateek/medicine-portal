import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMedicineComponent } from './components/add-medicine/add-medicine.component';
import { ListMedicineComponent } from './components/list-medicine/list-medicine.component';


const routes: Routes = [
  { component: AddMedicineComponent, path: 'add-medicine' },
  { component: ListMedicineComponent, path: 'list-medicine' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
