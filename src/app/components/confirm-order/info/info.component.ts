import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShippingInfo } from 'src/app/view_models/shipping_info_model';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit{
  info: ShippingInfo = new ShippingInfo();

  constructor(
    private router: Router
  ){}
  ngOnInit(): void {
    this.onInitView();
  }

  onInitView() {
    // Neu da ton tai session shipping info
    const isExistShippingInfo = sessionStorage.getItem('shipInfo');
    if(isExistShippingInfo) {
      this.info = JSON.parse(isExistShippingInfo);
    }
    // Neu chua
    else {  
      this.info = new ShippingInfo();
    }
  }

  onContinueToShipping() {
    sessionStorage.setItem('shipInfo', JSON.stringify(this.info));
    this.router.navigate(['ptj/checkout/shipping']);
  }

}
