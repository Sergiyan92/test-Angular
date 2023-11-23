import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div>
      <h1>Exchange Rates</h1>
      <p>USD to UAH: {{ getRate('USD') | number : '1.2-2' }}</p>
      <p>EUR to UAH: {{ getRate('EUR') | number : '1.2-2' }}</p>
    </div>
  `,
})
export class HeaderComponent {
  @Input() exchangeRates: any[] = [];

  getRate(currencyCode: string): number | undefined {
    const currency = this.exchangeRates?.find(
      (rate) => rate.cc === currencyCode
    );
    return currency?.rate;
  }
}
