import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    CoreModule
  ],
  declarations: [HomeComponent, DashboardComponent]
})
export class UserModule { }
