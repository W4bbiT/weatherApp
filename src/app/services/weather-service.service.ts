import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WeatherModel } from '../model/wetherModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherModel> {
    return this.http.get<WeatherModel>(environment.weatherApiBaseURL, {
      params: new HttpParams()
        .set('q', cityName)
        .set('aqi', 'no')
    })
  }
}
