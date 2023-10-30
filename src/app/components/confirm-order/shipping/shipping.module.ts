import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShippingRoutingModule } from './shipping-routing.module';
import { ShippingComponent } from './shipping.component';


@NgModule({
  declarations: [ShippingComponent],
  imports: [
    CommonModule,
    ShippingRoutingModule
  ]
})
export class ShippingModule { }
