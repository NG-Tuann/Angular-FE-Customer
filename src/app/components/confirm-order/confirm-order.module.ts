import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmOrderRoutingModule } from './confirm-order-routing.module';
import { InfoComponent } from './info/info.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ConfirmOrderComponent } from './confirm-order.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PaymentComponent } from './payment/payment.component';
import { PaypalComponent } from '../paypal/paypal.component';


@NgModule({
  declarations: [
    ConfirmOrderComponent,
  ],
  imports: [
    CommonModule,
    ConfirmOrderRoutingModule,
    ReactiveFormsModule
  ]
})
export class ConfirmOrderModule { }
