import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeLayoutRoutingModule } from './home-layout-routing.module';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from 'src/app/footer/footer.component';
import { HomeLayoutComponent } from './home-layout.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeLayoutComponent,
  ],
  imports: [
    CommonModule,
    HomeLayoutRoutingModule,
    ReactiveFormsModule
  ],
})
export class HomeLayoutModule { 
    
}
