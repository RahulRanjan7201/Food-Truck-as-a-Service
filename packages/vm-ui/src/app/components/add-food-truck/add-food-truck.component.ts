import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FoodTruckService } from '../../services/food-truck.service';
import { FoodTruck } from '../../models/foodtruck';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-add-food-truck',
  templateUrl: './add-food-truck.component.html',
  styleUrls: ['./add-food-truck.component.scss']
})
export class AddFoodTruckComponent {
  foodTruckForm!: FormGroup;
  isEdit: boolean = false;
  constructor(private fb: FormBuilder, private foodTruckService: FoodTruckService,public dialogRef: MatDialogRef<AddFoodTruckComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FoodTruck,private _snackBar: MatSnackBar) {
      
     }

  ngOnInit(): void {
    this.foodTruckForm = this.fb.group({
      _id:[''],
      name: ['', Validators.required],
      date: [new Date(), Validators.required]
    });
    if(this.data.date) {
      this.isEdit = true;
      this.foodTruckForm.controls['_id'].setValue(this.data._id);
      this.foodTruckForm.controls['date'].disable();
      this.foodTruckForm.controls['date'].setValue(this.data.date);
      this.foodTruckForm.controls['name'].setValue(this.data.name);
     }
  }

  submitFoodTruck(): void {
    const foodTruck: FoodTruck = this.foodTruckForm.value;
    this.foodTruckService.addFoodTruck(foodTruck).subscribe(
      response => {
        console.log(response);
        this.foodTruckForm.reset();
        this._snackBar.open("Record created successfully ", "info");
        this.dialogRef.close(response);
       
      },
      error => {
        this._snackBar.open("Error in creating record", "error");
        console.log(error);
      })
    }
    onCancel() {
      this._snackBar.open("Dialog is closed", "closed");
      this.dialogRef.close(null);
    }
    Update() {
      console.log(this.foodTruckForm.value)
      const foodTruck: FoodTruck = this.foodTruckForm.value;
      this.foodTruckService.editFoodTruck(foodTruck._id!, foodTruck).subscribe(
        response => {
          this.foodTruckForm.reset();
          this._snackBar.open("Record updated successfully ", "info");
          this.dialogRef.close(foodTruck);
         
        },
        error => {
          this._snackBar.open("Error in updating record", "error");
          console.log(error);
        })
    }
}
