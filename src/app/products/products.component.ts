import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  // Link to our api, pointing to localhost
  API = '/api';

  // Declare empty list of products
  products: any[] = [];

  constructor(private http: Http) {}

  // Angular 2 Life Cycle event when component has been initialized
  ngOnInit() {
    this.getAllProduct();
  }

  // Add one product to the API
  addProduct(name, code ,   description ,  tarif , poids) {
    this.http.post(`${this.API}/products`, {name, code ,   description ,  tarif , poids})
      .map(res => res.json())
      .subscribe(() => {
        this.getAllProduct();
      })
  }

  // Get all products from the API
  getAllProduct() {
    this.http.get(`${this.API}/products`)
      .map(res => res.json())
      .subscribe(products => {
        console.log(products)
        this.products= products
      })
  }

  //delete

  deleteProduct(id){
    this.http.delete(`${this.API}/products/`, id)
      .map(res => res.json())
      .subscribe(products => {
        console.log(products)
        this.products= products
      })   
  }


  
}
