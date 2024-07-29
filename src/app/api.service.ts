import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private customerRegisterUrl = 'http://127.0.0.1:8000/api/customers';
  private pharmacyRegisterUrl = 'http://127.0.0.1:8000/api/pharmacy';

  constructor(private http: HttpClient) {}

  registerCustomer(data: any): Observable<any> {
    return this.http.post<any>(this.customerRegisterUrl, data);
  }

  registerPharmacy(data: any): Observable<any> {
    return this.http.post<any>(this.pharmacyRegisterUrl, data);
  }
}
