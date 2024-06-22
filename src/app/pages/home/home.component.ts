import { Component, OnInit } from '@angular/core';
import { EcomApiService } from 'src/app/services/ecom-api/ecom-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categoriesList = [];

  productsList = [];

  constructor(
    private ecomApiService: EcomApiService,
  ) {}

  ngOnInit(): void {
    this.getAllCategories();
    this.getAllProducts();
    this.getAllItemsInCart();
  }

  getAllCategories(): void {
    this.ecomApiService.getAllCategories().subscribe((res) => {
      this.categoriesList = res && res.length ? res : [];
    }, () => {
      alert('Failed to fetch Categories');
    })
  }

  getAllProducts(): void {
    this.ecomApiService.getAllProducts().subscribe((res) => {
      this.productsList = res && res.length ? res : [];
    });
  }

  getAllItemsInCart(): void {
    this.ecomApiService.getProductsInCart().subscribe((res) => {
      console.log(res);
    })
  }
}
