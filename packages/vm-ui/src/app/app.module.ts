import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FoodTruckListComponent } from './components/food-truck-list/food-truck-list.component';
import { AddFoodTruckComponent } from './components/add-food-truck/add-food-truck.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import {MaterialModule} from './material.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { ShimmerComponent } from './components/shimmer/shimmer.component';
@NgModule({
  declarations: [
    AppComponent,
    FoodTruckListComponent,
    AddFoodTruckComponent,
    NavigationComponent,
    HomeComponent,
    ShimmerComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
