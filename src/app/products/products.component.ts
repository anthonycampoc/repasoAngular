import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../models/products.model';
import { ApiRestService } from '../api/api-rest.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    productList: Iproducts[] = [];

    constructor(private _apiServive: ApiRestService){}

    ngOnInit(): void {
      this._apiServive.getAllProducts().subscribe((data: Iproducts[])=>{
        console.log(data);
        this.productList = data;
      })
    }
}
