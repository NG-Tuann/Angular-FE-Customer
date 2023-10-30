import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/login_model';
import { Environment } from 'src/environments/environment';
import { RegisterModel } from '../models/register_model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url="Customer"
  constructor(private httpClient: HttpClient) { }
  
  // Customer Login
  public login(username:string, password:string) : Observable<string> {
    const model = new LoginModel(username,password);
    return this.httpClient.post<string>(`${Environment.apiUrl}/${this.url}/`+'login',model);
  }
  
  // Customer Register
  public register(register: RegisterModel) : Observable<string> {
    return this.httpClient.post<string>(`${Environment.apiUrl}/${this.url}/`+'register/',register);
  }
}
