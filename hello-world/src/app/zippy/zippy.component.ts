import { Component, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
})
export class ZippyComponent {
  @Input('title') title: string = '';
  isExpanded: boolean = false;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  /*
        MY IMPLEMENTATION

  isShippingActive = false;
  isBillingActive = false;
  shippingBackColor = '';
  billingBackColor = '';

  onShippingClick() {
    console.log('shipping');
    this.isShippingActive = !this.isShippingActive;
    this.shippingBackColor = this.isShippingActive
      ? 'lightgray'
      : 'transparent';
  }

  onBillingClick() {
    this.isBillingActive = !this.isBillingActive;
    this.billingBackColor = this.isBillingActive ? 'lightgray' : 'transparent';
  }

  */
}
