import { Component, OnInit } from '@angular/core';
import { ProductsRepository } from 'src/app/repositories/products.repository';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {

  showEditProductPopUp: boolean;
  showDeletePopUp: boolean;



  constructor(private repo: ProductsRepository,
    private router: Router) { }

  get products(): Product[] {
    return this.repo.products;
  }

  get product(): Product {
    return this.repo.product;
  }

  submitDeleteProduct(id: number) {
    
    this.showDeletePopUp = false;
    this.repo.deleteProduct(id);
    
  }


  selectProduct(id: number) {
    this.repo.getProduct(id);
    this.router.navigateByUrl("/detail");
  }

  ngOnInit() {

  }

  editProduct(id: number): void {

    this.repo.getProduct(id);

    console.log(this.product);

    this.showEditProductPopUp = true;
  }

  showDeleteProduct(id: number): void {
    this.repo.getProduct(id);
    this.showDeletePopUp = true;
  }

  
 

  submitUpdateProduct(): void {
    this.showEditProductPopUp = false;

    this.repo.replaceProduct(this.product);
    this.router.navigate([""]);
  }

 

  closePopUp() {
    this.showEditProductPopUp = false;
  }


  onCloseDeletePopUp() {
    this.showDeletePopUp = false;
  }


}
