import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  userType: string | null = null;
  userName: string | null = null;

  ngOnInit(): void {
    this.userType = sessionStorage.getItem('userType');
    const userData = sessionStorage.getItem('userData');

    if (userData) {
      const user = JSON.parse(userData);
      if (this.userType === 'pharmacy_admin') {
        this.userName = user.Pharmacy_Name;
      } else if (this.userType === 'customer') {
        this.userName = user.Customer_Name;
      }
    }
  }
}
