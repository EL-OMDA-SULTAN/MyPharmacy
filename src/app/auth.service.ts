import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api'; // Adjust if necessary

  constructor(private http: HttpClient) {}

  registerCustomer(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/customers`, data);
  }

  registerPharmacy(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/pharmacy`, data);
  }

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  isLoggedIn(): boolean {
    // Check if the user data exists in session storage
    return !!sessionStorage.getItem('user');
  }

  isAuthenticated(): boolean {
    // Implement your logic here to check if the user is authenticated
    // We should check session storage directly
    return this.isLoggedIn();
  }

  getUserType(): string {
    const user = JSON.parse(sessionStorage.getItem('user') || '{}');
    return user ? user.User_Type : '';
  }

  logout(): void {
    sessionStorage.removeItem('user');
    // Optionally, redirect to login page
  }
}
