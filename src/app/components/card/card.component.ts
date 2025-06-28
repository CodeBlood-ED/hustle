import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { ProductResponse } from '../../models/ProductResponse';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  products: ProductResponse[] = [];

  constructor(private productService: ProductService){}
  ngOnInit(): void {
    this.productService.retrieveProducts().subscribe((data: ProductResponse[])=>{
      this.products = data;
    })
  }

}
