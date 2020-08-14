import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkshopAddComponent } from './workshop/workshop-add/workshop-add.component';
import { WorkshopListComponent } from './workshop/workshop-list/workshop-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'workshop/list',
    pathMatch: 'full'
  },
  {
    path: 'workshop',
    redirectTo: 'workshop/list'
  },
  {
    path: 'workshop/list',
    component: WorkshopListComponent
  },
  {
    path: 'workshop/add',
    component: WorkshopAddComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
