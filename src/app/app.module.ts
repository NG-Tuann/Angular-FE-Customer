import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailComponent } from './components/detail/detail.component';
import { HomeComponent } from './components/home/home.component';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'; 
import { HomeLayoutModule } from './components/home-layout/home-layout.module';
import { DetailModule } from './components/detail/detail.module';
import { CartComponent } from './components/cart/cart.component';
import { ConfirmOrderComponent } from './components/confirm-order/confirm-order.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,

    HomeLayoutModule,
    DetailModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
