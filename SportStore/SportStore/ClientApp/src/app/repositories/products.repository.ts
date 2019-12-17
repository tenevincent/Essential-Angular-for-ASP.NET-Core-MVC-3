import { Component, Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { from } from "rxjs";


@Injectable({
  providedIn: 'root',
})
export class ProductsRepository {

  public product: Product;
  //private baseUrl: string = "https://localhost:44369";


  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Product>(baseUrl + 'api/products/FirstProduct').subscribe(result => {
      this.product = result;
    }, error => console.error(error));
  }
}

