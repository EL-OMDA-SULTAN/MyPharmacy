import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categories: any = [
    {
      id: 1,
      name: 'Category 1',
      products: [
        {
          id: 1,
          name: 'Product 1'
        },
        {
          id: 2,
          name: 'Product 2'
        },
        {
          id: 3,
          name: 'Product 3'
        }
      ]
    },
    {
      id: 2,
      name: 'Category 2',
      products: [
        {
          id: 4,
          name: 'Product 4'
        },
        {
          id: 5,
          name: 'Product 5'
        },
        {
          id: 6,
          name: 'Product 6'
        }
      ]
    },
    {
      id: 3,
      name: 'Category 3',
      products: [
        {
          id: 7,
          name: 'Product 7'
        },
        {
          id: 8,
          name: 'Product 8'
        },
        {
          id: 9,
          name: 'Product 9'
        }
      ]
    }
  ];
}
