

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FoodTruck } from '../models/foodtruck';

@Injectable({
  providedIn: 'root'
})
export class FoodTruckService {
  private apiUrl = 'http://localhost:3000/foodtrucks';

  constructor(private http: HttpClient) { }

  getFoodTrucks(): Observable<FoodTruck[]> {
    return this.http.get<FoodTruck[]>(this.apiUrl);
  }

  addFoodTruck(foodTruck: FoodTruck): Observable<FoodTruck> {
    return this.http.post<FoodTruck>(this.apiUrl, foodTruck);
  }

  editFoodTruck(id: string, foodTruck: FoodTruck): Observable<FoodTruck> {
    return this.http.put<FoodTruck>(`${this.apiUrl}/${id}`, foodTruck);
  }

  getTodayFoodTrucks(): Observable<FoodTruck[]> {
    return this.http.get<FoodTruck[]>(`${this.apiUrl}/today`);
  }
}
