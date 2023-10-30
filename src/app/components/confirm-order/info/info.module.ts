import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoRoutingModule } from './info-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfoComponent } from './info.component';


@NgModule({
  declarations: [InfoComponent],
  imports: [
    CommonModule,
    InfoRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class InfoModule { }
