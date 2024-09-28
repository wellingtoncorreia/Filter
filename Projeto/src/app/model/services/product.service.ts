import { Injectable } from '@angular/core';
import { products } from '../data/db';
import { Iproduct } from './iproduct';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:Iproduct[] = products;


  getProducts(): Observable<Iproduct[]> {
    return of(this.products);
  }
}
