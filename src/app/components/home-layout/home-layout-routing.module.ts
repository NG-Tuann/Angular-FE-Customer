import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './home-layout.component';

const routes: Routes = [
  {path:'',redirectTo:'ptj',pathMatch: 'full'},
  {
    path:'ptj', component:HomeLayoutComponent, children: [
      {path:'', loadChildren: () => import('../home/home.module').then(m => m.HomeModule)},
      {path:'cart', loadChildren: () => import('../cart/cart.module').then(m => m.CartModule)},
      {path:'checkout', loadChildren: () => import('../confirm-order/confirm-order.module').then(m => m.ConfirmOrderModule)},
      {path:'detail/:id', loadChildren: () => import('../detail/detail.module').then(m => m.DetailModule)},
      {path:'paypal-success', loadChildren: () => import('../paypal/paypal.module').then(m => m.PaypalModule)},
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class HomeLayoutRoutingModule { }
