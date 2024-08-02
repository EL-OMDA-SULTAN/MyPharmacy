import { AuthService } from './../auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-show-pharmacies',
  templateUrl: './show-pharmacies.component.html',
  styleUrls: ['./show-pharmacies.component.css']
})
export class ShowPharmaciesComponent {
   pharmacies:any =[];

  constructor(private authService:AuthService ) { }

  ngOnInit(): void {
    this.authService.getPharmacy().subscribe(data => {
      this.pharmacies = data;
      console.log(this.pharmacies);
    });
  }

  addPharmacy(): void {
    // Logic to add a pharmacy
  }

  editPharmacy(pharmacyId: number): void {
    // Logic to edit a pharmacy
  }

  deletePharmacy(pharmacyId: number): void {
    // Logic to delete a pharmacy
  }
}
