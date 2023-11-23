import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private apiUrl = 'YOUR_API_ENDPOINT'; // Підставте сюди URL API для отримання курсів валют

  constructor(private http: HttpClient) {}

  getExchangeRates(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
