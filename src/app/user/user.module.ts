import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './home/home.component';
import { CoreModule } from '../core/core.module';
import { CommonNotificationComponent } from './center/common-notification/common-notification.component';
import { HistoryComponent } from './center/history/history.component';
import { LuckyNumberComponent } from './center/lucky-number/lucky-number.component';
import { WithdrawPanelComponent } from './left/withdraw-panel/withdraw-panel.component';
import { DashboardComponent } from './left/dashboard/dashboard.component';
import { TopUserComponent } from './right/top-user/top-user.component';
import { NewUserComponent } from './right/new-user/new-user.component';
import { WinnerComponent } from './right/winner/winner.component';
import { ResultWidgetComponent } from './right/result-widget/result-widget.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    CoreModule,
    FormsModule
  ],
  declarations: [
    HomeComponent,
    DashboardComponent,
    LuckyNumberComponent,
    WithdrawPanelComponent,
    CommonNotificationComponent,
    TopUserComponent,
    NewUserComponent,
    WinnerComponent,
    ResultWidgetComponent,
    HistoryComponent
  ]
})
export class UserModule { }
