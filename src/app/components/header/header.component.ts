import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div>
      <h1>Exchange Rates</h1>
      <p>USD to UAH: {{ exchangeRates?.usd }}</p>
      <p>EUR to UAH: {{ exchangeRates?.eur }}</p>
    </div>
  `,
})
export class HeaderComponent {
  @Input() exchangeRates: any;
}
