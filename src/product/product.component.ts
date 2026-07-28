import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
}


  products = [
    {
    brand: "Apple",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
    price: 79999,
    stock: 15,
    title: "iPhone 16"
  },
  {
    brand: "Samsung",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600",
    price: 74999,
    stock: 20,
    title: "Galaxy S25"
  },
  {
    brand: "OnePlus",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600",
    price: 54999,
    stock: 12,
    title: "OnePlus 13"
  },
  {
    brand: "Xiaomi",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600",
    price: 32999,
    stock: 25,
    title: "Xiaomi 15"
  },
  {
    brand: "Google",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600",
    price: 69999,
    stock: 10,
    title: "Pixel 10"
  }
  ];
}
