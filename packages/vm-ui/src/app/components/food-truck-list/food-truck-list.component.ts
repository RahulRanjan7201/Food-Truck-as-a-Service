

import { Component, OnInit } from '@angular/core';
import { FoodTruckService } from '../../services/food-truck.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AddFoodTruckComponent } from '../add-food-truck/add-food-truck.component';
@Component({
  selector: 'app-food-truck-list',
  templateUrl: './food-truck-list.component.html',
  styleUrls: ['./food-truck-list.component.scss']
})
export class FoodTruckListComponent implements OnInit {
  dataSource = new MatTableDataSource<any>();
  editData: any;
  loading:boolean = true;
  constructor(private dialog: MatDialog, private foodTruckService: FoodTruckService) { }

  ngOnInit(): void {
    this.loadAll();
  }

   loadAll(): void {
    this.loading = true;
    this.foodTruckService.getFoodTrucks()
     .subscribe(foodTrucks => {
       this.dataSource.data = foodTrucks;
       this.loading = false;
     });
   }

  editRow(row: any) {
    this.editData = { ...row };
    const dialogRef = this.dialog.open(AddFoodTruckComponent, {
      data: this.editData
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource.data = this.dataSource.data.map(data => {
          if (data._id == result._id) {
             data.name = result.name;
          } 
          return data;
        });
      }
    });
  }

  addRow() {
    const dialogRef = this.dialog.open(AddFoodTruckComponent, {
      data: {},
      width:"300px",
      height:"300px"
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.data) {
        this.dataSource.data.push(result.data);
        this.dataSource.data = [...this.dataSource.data];
      }
    });
  }
  today()  {
    this.loading = true;
    this.foodTruckService.getTodayFoodTrucks()
    .subscribe(foodTrucks =>  {
      this.dataSource.data = foodTrucks;
      this.loading = false;
    });
  }
  onCancel() {
    this.dialog.closeAll();
  }

  onSave() {
    this.dialog.closeAll();
  }

}
