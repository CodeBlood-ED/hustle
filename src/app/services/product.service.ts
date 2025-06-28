import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductRequest } from '../models/ProductRequest';
import { ProductResponse } from '../models/ProductResponse';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  url = "http://localhost:8080/api/v1";


  // service method for uploading product request as form data
  uploadProduct(product: ProductRequest) {
    let url = this.url + "/upload_product";

    const headers = new HttpHeaders();

    headers.append('Accept-Encoding', 'compress');

    const formData = new FormData();
    formData.append("product_title", product.product_title ?? '');
    formData.append("product_category", product.product_category ?? '');
    formData.append("product_mrp", product.product_mrp ?? '');
    formData.append("product_netPrice", product.product_netPrice ?? '');
    if (product.product_image) {
      formData.append("product_image", product.product_image);
    }

    const requestOptions = [
      formData, 
      headers
    ];

    this.http.post(url, requestOptions).subscribe();
  }

  retrieveProducts(): Observable<ProductResponse[]>{
    return this.retrieveProductsHttp();
  }
   // service method to retrieve saved products from DB
  retrieveProductsHttp(): Observable<any> {
    let url = this.url + "/get_products";

    return this.http.get(url);
  }
}
