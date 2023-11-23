import { Component } from '@angular/core';

@Component({
  selector: 'app-currency-converter',
  template: `
    <div>
      <div>
        <label>Amount:</label>
        <input [(ngModel)]="amount" type="number" />
        <label>Currency:</label>
        <select [(ngModel)]="currencyFrom">
          <option value="uah">UAH</option>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
        </select>
      </div>
      <div>
        <label>Converted Amount:</label>
        <input [value]="convertedAmount" readonly />
        <label>Currency:</label>
        <select [(ngModel)]="currencyTo">
          <option value="uah">UAH</option>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
        </select>
      </div>
    </div>
  `,
})
export class CurrencyConverterComponent {
  amount: number | undefined;
  currencyFrom: string | undefined;
  currencyTo: string | undefined;
  convertedAmount: number | undefined;

  // Додайте метод для конвертації валют
  convertCurrency() {
    // Реалізуйте конвертацію тут з використанням курсів валют
  }
}
