import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ExchangeRate {
  r030: number;
  txt: string;
  rate: number;
  cc: string;
  exchangedate: string;
}

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private apiUrl =
    'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json';

  constructor(private http: HttpClient) {}

  getExchangeRates(): Observable<ExchangeRate[]> {
    return this.http.get<ExchangeRate[]>(this.apiUrl);
  }
}
