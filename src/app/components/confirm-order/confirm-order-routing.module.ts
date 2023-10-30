import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmOrderComponent } from './confirm-order.component';

const routes: Routes = [
  {path:'', component: ConfirmOrderComponent, children: [
    {path:'', loadChildren: () => import('./info/info.module').then(m => m.InfoModule)},
    {path:'payment', loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule)},
    {path:'shipping', loadChildren: () => import('./shipping/shipping.module').then(m => m.ShippingModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfirmOrderRoutingModule { }
