import { Component, OnInit } from '@angular/core';
import { EcomApiService } from 'src/app/services/ecom-api/ecom-api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor(
    private ecomApiService: EcomApiService,
  ) {}

  ngOnInit(): void {
    this.getAllItemsInCart();
  }

  getAllItemsInCart(): void {
    this.ecomApiService.getProductsInCart().subscribe((res) => {
      console.log(res);
    })
  }
}
