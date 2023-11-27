import { Component } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';

interface ExchangeRate {
  cc: string;
  rate: number;
  exchangedate: string;
}

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
})
export class CurrencyConverterComponent {
  amount: number | undefined;
  currencyFrom: string = '';
  currencyTo: string = '';
  convertedAmount: number = 0;

  constructor(private currencyService: CurrencyService) {}

  convertCurrency() {
    this.currencyService.getExchangeRates().subscribe(
      (data: ExchangeRate[]) => {
        const exchangeRates = data;

        if (this.currencyFrom && this.currencyTo) {
          const rateFrom =
            this.currencyFrom === 'UAH'
              ? 1
              : exchangeRates.find((rate) => rate.cc === this.currencyFrom)
                  ?.rate;
          const rateTo =
            this.currencyTo === 'UAH'
              ? 1
              : exchangeRates.find((rate) => rate.cc === this.currencyTo)?.rate;
          if (rateFrom && rateTo) {
            this.convertedAmount = ((this.amount || 0) / rateTo) * rateFrom;
          } else {
            this.convertedAmount = 0;
          }
        }
      },
      (error) => {
        console.error('Error fetching exchange rates', error);
      }
    );
  }
}
