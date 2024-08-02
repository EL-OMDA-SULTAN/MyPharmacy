import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable} from 'rxjs';

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

  // category
  getCategories(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/category`);
  }

  getCategory(id:any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/category`,id);
  }

  addCategory(data:FormData): Observable<any> {
    // console.log(data)
    console.log(data)
    return this.http.post(`${this.apiUrl}/category`, data);
  }
  handleError(handleError: any): import("rxjs").OperatorFunction<Object, any> {
    throw new Error('Method not implemented.');
  }

  updateCategory(id: number, category: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/category/${id}`, category);
  }

<<<<<<< HEAD
  deleteCategory(id: number): Observable<any> {
  console.log(id); // Debug: Check the id value
  return this.http.delete<any>(`${this.apiUrl}/category/${id}`);
  }

  // product
  getProducts(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/product`);
  }

  getProduct(id:any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/product`,id);
  }

  addProduct(data: any): Observable<any> {
    // console.log(data)
    return this.http.post(`${this.apiUrl}/product`, data);
  }

  updateProduct(id: number, product: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/product/${id}`, product);
  }

  deleteProduct(id: number): Observable<any> {
  console.log(id); // Debug: Check the id value
  return this.http.delete<any>(`${this.apiUrl}/product/${id}`);
=======
 deleteCategory(categoryId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/category/${categoryId}`);
  }
  getCategoryById(categoryId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/category/${categoryId}`);
>>>>>>> 9b7c1c56029025ba6125d668823b2c4bc26d3c35
  }
}
