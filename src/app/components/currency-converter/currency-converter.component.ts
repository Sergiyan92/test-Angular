import { Component } from '@angular/core';
import { CurrencyService } from '../../services/currency.service'; // вставте свій шлях до сервісу

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
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
