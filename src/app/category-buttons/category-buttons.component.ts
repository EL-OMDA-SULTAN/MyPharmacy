import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-buttons',
  templateUrl: './category-buttons.component.html',
  styleUrls: ['./category-buttons.component.css']
})
export class CategoryButtonsComponent implements OnInit {
  topCategories = [
    { name: 'Home Health Care', icon: 'assets/icons/home-health-care.webp' },
    { name: 'Beauty Accessories', icon: 'assets/icons/beauty-accessories.webp' },
    { name: 'Vitamins & Supplements', icon: 'assets/icons/vitamins-supplements.webp' },
    { name: 'Mom & Baby', icon: 'assets/icons/mom-baby.webp' },
    { name: 'Medications', icon: 'assets/icons/medications.webp' },
    { name: 'Every Day Essentials', icon: 'assets/icons/every-day-essentials.webp' },
    { name: 'Skin Care', icon: 'assets/icons/skin-care.webp' },
    { name: 'Hair Care', icon: 'assets/icons/hair-care.webp' },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
