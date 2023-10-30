import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[checkOutStock]'
})
export class CheckOutStockDirective implements OnInit {
  @Input('checkOutStock') quantity: number;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    if (this.quantity === 0) {
      this.el.nativeElement.style.opacity="0.5";
      this.el.nativeElement.style.pointerEvents ="none";
    }
  }
}




