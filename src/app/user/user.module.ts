import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoreModule } from '../core/core.module';
import { LuckyNumberComponent } from './lucky-number/lucky-number.component';
import { WithdrawPanelComponent } from './withdraw-panel/withdraw-panel.component';
import { CommonNotificationComponent } from './common-notification/common-notification.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    CoreModule,
    FormsModule
  ],
  declarations: [HomeComponent, DashboardComponent, LuckyNumberComponent, WithdrawPanelComponent, CommonNotificationComponent]
})
export class UserModule { }
