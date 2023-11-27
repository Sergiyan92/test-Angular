import { Component, OnInit } from '@angular/core';
import { CurrencyService, ExchangeRate } from './services/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title: string = 'My Angular App';
  exchangeRates: ExchangeRate[] = [];

  constructor(private currencyService: CurrencyService) {}

  ngOnInit() {
    this.currencyService
      .getExchangeRates()
      .subscribe((data: ExchangeRate[]) => {
        this.exchangeRates = data;
      });
  }
}
