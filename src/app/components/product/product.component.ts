import { Component, Input } from '@angular/core';
import { ProductDetail } from 'src/app/models/Products.model';
import { EcomApiService } from 'src/app/services/ecom-api/ecom-api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() productDetail: ProductDetail;

  constructor(
    private ecomApiService: EcomApiService,
  ) {}
  
  addProductTOCart(product): void {
    this.ecomApiService.addItemsToCart(product);
  }
}
