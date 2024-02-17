 import { Injectable } from '@angular/core';
 import {Observable} from "rxjs";
 import {Product} from "../models/Product";
 import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CartapiService {

  constructor(private  http: HttpClient) { }

  fetchProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('https://fakestoreapi.com/products')
  }
}
