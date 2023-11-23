import { Component } from '@angular/core';
import { CurrencyService } from '../../services/currency.service'; // вставте свій шлях до сервісу

@Component({
  selector: 'app-currency-converter',
  template: `
    <div>
      <h2>Сurrency converter</h2>
      <div>
        <label>Amount:</label>
        <input [(ngModel)]="amount" type="number" />
        <label>Currency:</label>
        <select [(ngModel)]="currencyFrom">
          <option value="UAH">UAH</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
      <div>
        <label>Converted Amount:</label>
        <input [value]="convertedAmount.toFixed(2)" readonly />
        <label>Currency:</label>
        <select [(ngModel)]="currencyTo">
          <option value="UAH">UAH</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
      <button (click)="convertCurrency()">Convert</button>
    </div>
  `,
})
export class CurrencyConverterComponent {
  amount: number | undefined;
  currencyFrom: string = '';
  currencyTo: string = '';
  convertedAmount: number = 0;

  // Вставте сервіс CurrencyService через конструктор
  constructor(private currencyService: CurrencyService) {}

  // Метод для конвертації валют
  convertCurrency() {
    // Отримайте курси валют з сервісу
    this.currencyService.getExchangeRates().subscribe(
      (data: any[]) => {
        const exchangeRates = data;

        if (this.currencyFrom && this.currencyTo) {
          // Отримайте курс валюти для конвертації
          const rateFrom =
            this.currencyFrom === 'UAH'
              ? 1
              : exchangeRates.find((rate) => rate.cc === this.currencyFrom)
                  ?.rate;
          const rateTo =
            this.currencyTo === 'UAH'
              ? 1
              : exchangeRates.find((rate) => rate.cc === this.currencyTo)?.rate;
          console.log(rateFrom);
          console.log(rateTo);
          // Розрахуйте сконвертовану суму
          if (rateFrom && rateTo) {
            this.convertedAmount = ((this.amount || 0) / rateTo) * rateFrom;
          } else {
            console.log('currencyFrom or currencyTo is undefined');
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
