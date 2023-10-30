import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';
import { ReloadheaderService } from 'src/app/services/reload_header.service';
import { CartSession } from 'src/app/view_models/cart_session_model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { RegisterModel } from 'src/app/models/register_model';
import { OrderProduct } from 'src/app/models/order_product';
import { OrderProductService } from 'src/app/services/order-product.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  orderProduct: OrderProduct;

  isShowDetail: boolean = false;

  showTrack:boolean = false;

  customerFullName: string = '';

  carts: CartSession[];

  cartQuantity: number;

  cartTrackTotal: number =0;

  // Login form
  loginForm: FormGroup;

  // Forgot password form

  // Register form
  signupForm: FormGroup;

  ngOnInit(): void {

    // Kiem tra nguoi dung da login chua
    this.checkIsCustomerLogin();

    // Lang nghe tu detail component
    this.reloadHeaderService.onEvent().subscribe((eventData) => {
      this.onUpdateNumberInCart();
    });

    this.onUpdateNumberInCart();

    // Do sth when click esc
    this.doSthWhenClickEsc();

    // Init login form
    this.onInitLoginForm();

    // Init sign up form

    this.onInitSignupForm();

    // Init forgot password form
  }

  constructor(
    private reloadHeaderService: ReloadheaderService,
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private orderProductService: OrderProductService
    ) {
  }

  // Show track order
  onShowTrack() {
    if(this.showTrack) {
      this.showTrack = false;
    }
    else{
      this.showTrack = true;
    }
  }

  // On init login form
  onInitLoginForm(){
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onClearLoginForm() {
    this.loginForm.reset();
  }

  // Login submit 
  onLoginSubmit() {
    if(this.loginForm.invalid) {
      return;
    }

    const {username, password} = this.loginForm.value;
    
    // Goi service login cho customer
    this.customerService.login(username, password).subscribe((result: string) => {
      // Set token vao local storage
      if(result == 'invalid-user'){
        alert('Invalid user');
      }
      else if(result == 'invalid-password'){
        alert('Wrong password');
      }
      else {
        localStorage.setItem('customer', result);
        this.checkIsCustomerLogin();  
        alert('Welcome back '+this.customerFullName);
        this.onClearLoginForm();
      }
    });
  }
  checkIsCustomerLogin() {
    // Is token set
    if(localStorage.getItem('customer')!= null) {
      const customerToken = localStorage.getItem('customer');
      // Test parse jwt token
      if(customerToken.length > 0) {
        const jwtHelper = new JwtHelperService();
        const decodedToken = jwtHelper.decodeToken(customerToken);
        const claimKeys = Object.keys(decodedToken);

        const fullName = decodedToken[claimKeys[0]];
        
        this.customerFullName = fullName;
      }
    }
    else {
      this.customerFullName = '';
      return;
    }
  }

  // On init signup form
  // On init login form
  onInitSignupForm(){
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      fullname: ['', Validators.required],
    });
  }

  onClearSignupForm() {
    this.signupForm.reset();
  }

  // On init forgot password form

  onUpdateNumberInCart() {
    const isSessionCartCreated = sessionStorage.getItem('cartItems');

    if(isSessionCartCreated) {
      this.carts = JSON.parse(isSessionCartCreated);
      this.cartQuantity = this.carts.length;
    }
    else {
      this.cartQuantity = 0;
    }
  }

  /* Xu ly controller khi click */

  /* Xu ly login */

  customerLoginClick() {
    // Xu ly khi nhan len LOGIN
    this.onShowLoginForm();
  }

  onShowLoginForm() {
    // An cac form forgot hoac la sign up neu co
    // An forgot password neu co
    document.querySelector('.forgot-password-wrapper').classList.remove('show');
    document.querySelector('.forgot-password-wrapper').classList.add('hide');
    // An signup neu co
    document.querySelector('.signup-wrapper').classList.remove('show');
    document.querySelector('.signup-wrapper').classList.add('hide');

    // Hien thi login form
    if(document.querySelector('.login-wrapper').classList.contains('show')) {
      document.querySelector('.login-wrapper').classList.remove('show')
      document.querySelector('.login-wrapper').classList.add('hide')
    }
    else {
      document.querySelector('.login-wrapper').classList.remove('hide')
      document.querySelector('.login-wrapper').classList.add('show')
    }
  }

  stopBubbling(event) {
    event.stopPropagation();
  }

  /* Xu ly forgot password */
  onHandleForgotPassword() {
    // An login form
    document.querySelector('.login-wrapper').classList.remove('show');
    document.querySelector('.login-wrapper').classList.add('hide');
    // Hien form forgot password
    this.onShowForgotPasswordForm();
  }

  onShowForgotPasswordForm() {
      document.querySelector('.forgot-password-wrapper').classList.remove('hide');
      document.querySelector('.forgot-password-wrapper').classList.add('show');
  }

  /* Xu ly sign up */
  onHandleSignUp() {
    // An login form
    document.querySelector('.login-wrapper').classList.remove('show');
    document.querySelector('.login-wrapper').classList.add('hide');
    
    // Hien form forgot password
    this.onShowSignupForm();
  }

  onShowSignupForm() {
    document.querySelector('.signup-wrapper').classList.remove('hide');
    document.querySelector('.signup-wrapper').classList.add('show');
  }

  // Do sth
  doSthWhenClickEsc() {
    document.body.addEventListener('keyup', function(e) {
      if(e.key === "Escape") {
        // Hide login, signup, forgot
        if(document.querySelector('.forgot-password-wrapper')) {
          document.querySelector('.forgot-password-wrapper').classList.remove('show');
          document.querySelector('.forgot-password-wrapper').classList.add('hide');  
        }

        if(document.querySelector('.login-wrapper')) {
          document.querySelector('.login-wrapper').classList.remove('show');
          document.querySelector('.login-wrapper').classList.add('hide');
        }

        if(document.querySelector('.signup-wrapper')) {
          document.querySelector('.signup-wrapper').classList.remove('show');
          document.querySelector('.signup-wrapper').classList.add('hide');
        }

        if(document.querySelector('.profile-wrapper-area')) {
          document.querySelector('.profile-wrapper-area').classList.remove('show');
          document.querySelector('.profile-wrapper-area').classList.add('hide');  
        }
      }
    }, true); 
  }

  /* Xu ly controller khi click tren profile */

  onHandleProfileClick() {
    if(document.querySelector('.profile-wrapper-area').classList.contains('show')){
      document.querySelector('.profile-wrapper-area').classList.remove('show');
      document.querySelector('.profile-wrapper-area').classList.add('hide');  
    }
    else {
      document.querySelector('.profile-wrapper-area').classList.remove('hide');
      document.querySelector('.profile-wrapper-area').classList.add('show');
    }
  }

  onLogout(){
    let confirmSignOut = confirm('Are you sure?');
    if(confirmSignOut) {
      localStorage.removeItem('customer');
      this.checkIsCustomerLogin();      
    }
    else {
      return;
    }
  }

  // Khi user submit sign up 
  onSubmitSignUp() {
    if(this.signupForm.valid) {
    let username = this.signupForm.value;
    let register = new RegisterModel();

    console.log(this.signupForm.value);
    register.mail = username.username;
    register.fullName = username.fullname;

    this.customerService.register(register).subscribe((result: string) => {
      // Set token vao local storage
      if(result == 'Email exist'){
        alert(result);
      }
      else {
        alert('Success. Please check your mail!')
        this.onClearSignupForm();
        document.querySelector('.signup-wrapper').classList.remove('show');
        document.querySelector('.signup-wrapper').classList.add('hide');
      }
    });
    }
    else {
      alert('Please fill in both field')
      return;
    }
  }

  // On search order
  onSearchOrder(order_id:string) {
    this.orderProductService.trackOrderById(order_id).subscribe((result:OrderProduct) => {
      if(result !=null) {
        console.log(result);
        this.orderProduct = result;  
      }
      else {
        alert('Not found');
      }
    });
    this.isShowDetail = false;
  }

  // Format date
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const datePipe = new DatePipe('en'); // Chọn ngôn ngữ bạn muốn sử dụng
    return datePipe.transform(date, 'dd/MM/yyyy') || '';
  }

  // View order detail 
  onViewOrderDetail() {
    this.cartTrackTotal = 0;

    this.orderProduct.orderDetails.forEach(element => {
      this.cartTrackTotal += element.quantity * element.salePrice;
    });

    if(this.isShowDetail) {
      this.isShowDetail = false;
    }
    else {
      this.isShowDetail = true;
    }
  }
}
