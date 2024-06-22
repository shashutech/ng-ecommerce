import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductDetail } from 'src/app/models/Products.model';

@Injectable({
  providedIn: 'root'
})
export class EcomApiService {

  baseUrl = environment.apiBaseUrl;

  cart = new BehaviorSubject([]);

  constructor(
    private http: HttpClient,
  ) { }

  getAllCategories(): Observable<Array<string>> {
    return this.http.get<Array<string>>(`${this.baseUrl}/products/categories`);
  }

  getAllProducts(): Observable<Array<ProductDetail>> {
    return this.http.get<Array<ProductDetail>>(`${this.baseUrl}/products`);
  }

  getProductsInCart() {
    return this.cart;
  }

  addItemsToCart(product) {
    const cartItems = this.cart;
    // product exists then add to quantity else add a new product
  }
}
