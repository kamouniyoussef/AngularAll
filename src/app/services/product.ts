import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';
import { Product } from '../product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = 'http://localhost:8084/api/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductModel[]> {
       return this.http.get<ProductModel[]>(`${this.apiUrl}/All`);
  }

  getProduct(id: number): Observable<ProductModel> {
<<<<<<< HEAD
    return this.http.get<ProductModel>(`${this.apiUrl}/produit/${id}`);
=======
    return this.http.get<ProductModel>(`${this.apiUrl}/${id}`);
>>>>>>> cc5d24f0c2ae06aa01f0cc9291cff8fc865e4855
  }

  createProduct(product: ProductModel): Observable<ProductModel> {
    return this.http.post<ProductModel>(`${this.apiUrl}/AddProduct`, product);
  }

  updateProduct(id: number, product: ProductModel): Observable<ProductModel> {
<<<<<<< HEAD
    return this.http.put<ProductModel>(`${this.apiUrl}/UpdateProduct/${id}`, product);
  }
 
=======
    return this.http.put<ProductModel>(`${this.apiUrl}/${id}`, product);
  }
>>>>>>> cc5d24f0c2ae06aa01f0cc9291cff8fc865e4855

   deleteProduct(id: number): Observable<ProductModel> {
    return this.http.delete<ProductModel>(`${this.apiUrl}/deleteProduct/${id}`);
  }


   
 
  

}