import { Component } from '@angular/core';

@Component({
  selector: 'app-show-pharmacies',
  templateUrl: './show-pharmacies.component.html',
  styleUrls: ['./show-pharmacies.component.css']
})
export class ShowPharmaciesComponent {
  //  pharmacies: any[];

  // constructor(private pharmacyService: PharmacyService) { }

  // ngOnInit(): void {
  //   this.pharmacyService.getPharmacies().subscribe(data => {
  //     this.pharmacies = data;
  //   });
  // }

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
