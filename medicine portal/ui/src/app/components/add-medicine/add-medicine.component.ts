import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Medicine } from 'src/app/models/medicine';
import { MedicineService } from 'src/app/services/medicine.service';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class AddMedicineComponent implements OnInit {
  medicine: Medicine;
  today = new Date();
  todaysDatePlus30 = new Date (new Date().setDate(this.today.getDate() + 30));
  todaysDatePlus15 = new Date (new Date().setDate(this.today.getDate() + 15));
  constructor(private medicineService: MedicineService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  // Add new medicine to system
  addMedicine() {
    if (this.medicine.expiryDate < this.todaysDatePlus15) {
      alert("Expiry date is less than 15 days!");
      return;
    }

    if (this.medicine.expiryDate < this.todaysDatePlus30) {
      if(!confirm("Warning! Expiry date is less than 30 days. Do you want to continue?")) {
        return;
      }
    }

    this.medicineService.addMedicine(this.medicine).subscribe((result: boolean) => {
      if (result) {
        this.resetForm();
        alert("Medicine Addedd Successfully!!");
      }
    });
  }

  resetForm() {
    this.medicine = { name : '', notes: '', quantity: 0.0, price: 0.0, expiryDate: new Date(), brand: ''};
  }

}
