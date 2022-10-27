import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private subject = new Subject<any>();

  addItemToCart(product: any) {
    this.subject.next(product);
  }
  clearCart() {
    this.subject.next(null);
  }
  getCartItems(): Observable<any> {
    return this.subject.asObservable();
  }
}
