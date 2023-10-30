import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from 'src/environments/environment';
import { PayPalCheckOut } from '../models/paypal-checkout';
import { ShippingInfo } from '../view_models/shipping_info_model';
import { CartSession } from '../view_models/cart_session_model';
import { NonCustomerPaypalSuccess } from '../view_models/non_customer_paypak_success';
import { OrderProduct } from '../models/order_product';

@Injectable({
  providedIn: 'root'
})
export class OrderProductService {

  url="OrderProduct"

  constructor(private httpClient: HttpClient) { }

  public checkout(total: number): Observable<string> {
    return this.httpClient.get<string>(`${Environment.apiUrl}/${this.url}/`+'checkout/'+total);
  }

  public checkoutSuccess(result: NonCustomerPaypalSuccess): Observable<string> {
    return this.httpClient.post<string>(`${Environment.apiUrl}/${this.url}/`+'nonCustomerPaypalSuccess',result);
  }

  public trackOrderById(id: string): Observable<OrderProduct> {
    return this.httpClient.get<OrderProduct>(`${Environment.apiUrl}/${this.url}/`+'trackOrder/'+id);
  }
  
}
