import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherModel } from '../model/wetherModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherModel> {
    return this.http.get<WeatherModel>('https://api.weatherapi.com/v1/current.json?key=6b8b1b6f97cd4d2fbbc191928232208', {
      params: new HttpParams()
        .set('q', cityName)
        .set('aqi', 'no')
    })
  }
}
