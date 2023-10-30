import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { CheckOutStockDirective } from 'src/app/directives/check_out_stock.directive';


@NgModule({
  declarations: [
    DetailComponent,
    CheckOutStockDirective
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
  ],
})
export class DetailModule { }
