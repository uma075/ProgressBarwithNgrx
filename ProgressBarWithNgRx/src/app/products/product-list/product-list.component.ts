import { Component, OnInit } from '@angular/core';
import { ProductsSandbox } from '../products.sandbox';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productsSandbox: ProductsSandbox ) { }

  ngOnInit() {
    
  }

  loadData(){
    this.productsSandbox.setProgress(true);
    // Code for some operation
    setTimeout(() => {
      this.productsSandbox.setProgress(false);
    }, 500);
   

  }
  
}
