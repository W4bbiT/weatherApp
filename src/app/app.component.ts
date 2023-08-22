import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from './services/weather-service.service';
import { WeatherModel } from './model/wetherModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cityName: string = 'Chicago';
  weatherData?: WeatherModel;

  constructor(private weatherService: WeatherServiceService) {}

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName)
      .subscribe({
        next: (response) => {
          this.weatherData = response;
          console.log(response);
        },
        error: (error) => {
          console.error('Error fetching weather data:', error);
        }
      });
  }
}
