import { Component } from '@angular/core';
import {CartapiService} from "../../services/cartapi.service";
import { Product} from "../../models/Product";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  productList: Product[] = [];

constructor(private cartApi: CartapiService) {

  }
  ngOnIn(){
  this.cartApi.fetchProducts().subscribe(product => this.productList = product)
  }
}
