import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private apiUrl = 'http://127.0.0.1:8000/api/orders'; 
  private basketSubject = new BehaviorSubject<any[]>([]);
  basket$ = this.basketSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadInitialBasket();
  }

  private loadInitialBasket(): void {
    const customerId = this.getCustomerIdFromSession();
    if (customerId) {
      this.getCartItems(customerId).subscribe(items => {
        this.basketSubject.next(items);
      });
    }
  }


  getCartItems(customerId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?customerId=${customerId}`);
  }

  addToBasket(order: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, order);
  }

  removeCartItem(productId: number, customerId: number): Observable<any> {
    return this.http.post<any>(`http://localhost:8000/api/orders/${productId}/soft-delete/${customerId}`, {});
  }
  updateCartItem(order: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${order.id}`, order);
  }

  private getCustomerIdFromSession(): number | null {
    const userData = sessionStorage.getItem('userData');
    if (userData) {
      const parsedData = JSON.parse(userData);
      return parsedData.Customer_ID;
    }
    return null;
  }

  getProduct(productId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/products/${productId}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('An error occurred:', error.message);
    return throwError('Something went wrong; please try again later.');
  }
}
