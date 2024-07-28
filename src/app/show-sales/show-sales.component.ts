import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-show-sales',
  templateUrl: './show-sales.component.html',
  styleUrls: ['./show-sales.component.css']
})
export class ShowSalesComponent {
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => this.loadSalesData(), 0);
  }

  loadSalesData() {
    const salesData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Sales',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgba(75,192,192,1)',
          tension: 0.1
        }
      ]
    };

    const ctx = document.getElementById('salesChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: salesData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Month'
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Sales'
            }
          }
        }
      }
    });
  }
}
