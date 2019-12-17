import { Component } from '@angular/core';
import { ProductsRepository } from './repositories/products.repository';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'SportStore';

  constructor(private repo: ProductsRepository) { }

  get product(): Product {
    return this.repo.product;
  }
}
