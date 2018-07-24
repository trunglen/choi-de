import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './home/home.component';
import { CoreModule } from '../core/core.module';
import { CommonNotificationComponent } from './center/common-notification/common-notification.component';
import { HistoryComponent } from './center/history/history.component';
import { LuckyNumberComponent } from './center/lucky-number/lucky-number.component';
import { WithdrawPanelComponent } from './left/withdraw-panel/withdraw-panel.component';
import { TopUserComponent } from './right/top-user/top-user.component';
import { NewUserComponent } from './right/new-user/new-user.component';
import { WinnerComponent } from './right/winner/winner.component';
import { ResultWidgetComponent } from './right/result-widget/result-widget.component';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { CURRENCY_MASK_CONFIG, CurrencyMaskConfig } from 'ng2-currency-mask/src/currency-mask.config';
import { PrivateNotificationComponent } from './left/private-notification/private-notification.component';
import { DashboardComponent } from './center/dashboard/dashboard.component';
import { EarnMoneyComponent } from './center/earn-money/earn-money.component';
export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "left",
  allowNegative: false,
  decimal: ",",
  precision: 0,
  prefix: "đ",
  suffix: "",
  thousands: "."
};

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    CoreModule,
    FormsModule,
    CurrencyMaskModule,
    HttpClientModule
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
    HistoryComponent,
    PrivateNotificationComponent,
    EarnMoneyComponent
  ],
  providers: [
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }
  ]
})
export class UserModule { }

