import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api'; // Adjust if necessary

  constructor(private http: HttpClient) {}

 // src/app/auth.service.ts
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


}
