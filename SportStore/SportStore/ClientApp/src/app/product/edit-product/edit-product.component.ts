import { Component, OnInit } from '@angular/core';
import { ProductsRepository } from 'src/app/repositories/products.repository';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

 

  /*
  name : string;
  category : string;
  price : Number;
 */


  constructor(private repo: ProductsRepository,
    private router: Router,
    private activeRoute: ActivatedRoute) {


   

  }

  ngOnInit() {
    let id = Number.parseInt(this.activeRoute.snapshot.params["id"]);
    console.log("retrieve id: " + id);
    if (id) {
      this.repo.getProduct(id);
    } else {
      this.router.navigateByUrl("/");
    }
    console.log( ("current product: " + this.repo.product ));


    /*
    this.name = this.product.name;
    this.category = this.product.category;
    this.price = this.product.price;
    */
    

  }

  editProduct() {
    this.repo.replaceProduct(this.repo.product);
    
    this.router.navigate([""]);
  }

  get product(): Product {
    return this.repo.product;
  }


}
