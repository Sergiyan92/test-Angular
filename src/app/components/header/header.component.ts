import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Input() exchangeRates: any[] = [];

  getRate(currencyCode: string): number | undefined {
    const currency = this.exchangeRates?.find(
      (rate) => rate.cc === currencyCode
    );
    return currency?.rate;
  }
  getExchangeDate(): string | undefined {
    const firstCurrency = this.exchangeRates?.[0];
    return firstCurrency?.exchangedate;
  }
}
