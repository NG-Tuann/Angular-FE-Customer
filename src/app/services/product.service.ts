import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ProductViewModel } from '../view_models/product_view_model';
import { Environment } from 'src/environments/environment';
import { Product } from '../models/Product';
import { ProductBestSellerViewModel } from '../view_models/product_best_seller_view_model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url="Product"
  constructor(private httpClient: HttpClient) { }

  public findAllProducts() : Observable<ProductViewModel[]> {
    return this.httpClient.get<ProductViewModel[]>(`${Environment.apiUrl}/${this.url}/`+'findAllProductDisplay');
  }

  public findAllHomeFlagProducts() : Observable<ProductViewModel[]> {
    return this.httpClient.get<ProductViewModel[]>(`${Environment.apiUrl}/${this.url}/`+'findAllProductHomeFlagDisplay');
  }

  public findAllBestSellerProducts() : Observable<ProductBestSellerViewModel[]> {
    return this.httpClient.get<ProductBestSellerViewModel[]>(`${Environment.apiUrl}/${this.url}/`+'findAllBestSellerProductDisplay');
  }

  public findProductDetail(id:number) : Observable<Product> {
    return this.httpClient.get<Product>(`${Environment.apiUrl}/ProductDetail/`+'findProductDetailById/'+id);
  }
}
