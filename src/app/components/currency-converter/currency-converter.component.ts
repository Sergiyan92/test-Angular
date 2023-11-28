import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  converterForm: FormGroup;
  amount: number = 0;
  currencyFrom: string = '';
  currencyTo: string = '';
  convertedAmount: number = 0;
  currencyOptions: { value: string; label: string }[] = [];

  constructor(
    private fb: FormBuilder,
    private currencyService: CurrencyService
  ) {
    // Ініціалізуємо форму в конструкторі
    this.converterForm = this.fb.group({
      amount: '',
      currencyFrom: '',
      currencyTo: '',
      convertedAmount: '',
    });
  }

  convertCurrency() {
    // Отримайте значення з форми
    const formValue = this.converterForm.value;

    if (formValue) {
      const { amount, currencyFrom, currencyTo } = formValue;

      // Реалізуйте логіку конвертації валют за допомогою сервісу
      this.currencyService.getExchangeRates().subscribe(
        (data: ExchangeRate[]) => {
          const exchangeRates = data;

          if (currencyFrom && currencyTo) {
            const rateFrom =
              currencyFrom === 'UAH'
                ? 1
                : exchangeRates.find((rate) => rate.cc === currencyFrom)?.rate;
            const rateTo =
              currencyTo === 'UAH'
                ? 1
                : exchangeRates.find((rate) => rate.cc === currencyTo)?.rate;

            if (rateFrom && rateTo) {
              this.convertedAmount = ((amount || 0) / rateTo) * rateFrom;
            } else {
              this.convertedAmount = 0;
            }

            // Оновлення значення в контролері форми з двома цифрами після коми
            this.converterForm
              .get('convertedAmount')
              ?.setValue(this.convertedAmount.toFixed(2));
          }
        },
        (error) => {
          console.error('Error fetching exchange rates', error);
        }
      );
    }
  }
}
