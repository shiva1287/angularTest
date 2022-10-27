import { Component, OnInit } from '@angular/core';
import * as data from './products.json';
import Swal from 'sweetalert2';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(private cartService:CartService) {}

  ngOnInit(): void {}

  products = (data as any).default;

  p: any;
  searchText: string = '';

  SortProducts(type: string) {
    if (type === 'asc') {
      this.products.sort((p1: any, p2: any) => p1.price - p2.price);
    } else {
      this.products.sort((p1: any, p2: any) => p2.price - p1.price);
    }
  }
  addToCart(prod:any) {
    // alert('Your Item is added to Cart');
    // Swal.fire('Good Job!', 'Your Item is added to cart', 'success');
    this.cartService.addItemToCart(prod)
  }
}
