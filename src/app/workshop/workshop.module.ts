import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkshopRoutingModule } from './workshop-routing.module';
import { WorkshopComponent } from './workshop.component';
import { WorkshopListComponent } from './workshop-list/workshop-list.component';
import { WorkshopAddComponent } from './workshop-add/workshop-add.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [WorkshopComponent, WorkshopListComponent, WorkshopAddComponent],
  imports: [
    CommonModule,
    WorkshopRoutingModule,
    SharedModule
  ]
})
export class WorkshopModule { }
