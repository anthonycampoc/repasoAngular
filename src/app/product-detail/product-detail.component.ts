import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../models/products.model';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiRestService } from '../api/api-rest.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent  implements OnInit {
    product?: Iproducts;
    loading: boolean = true;
    color? : string = '';

    constructor(
      private _route: ActivatedRoute,
      private _apiServive: ApiRestService
    ){}

    ngOnInit(): void {
      this._route.params.subscribe({
        
        next:(params:Params) =>{
          this._apiServive.getProducts(Number(params['productID'])).subscribe({
            
            next: (data: Iproducts)=>{ 
              this.product = data;
              this.color = this.product?.price as number < 60 ? 'red': '';
              this.loading = false;

              error:(error:any)=>{
                console.log(error);
                this.loading = false;
              }
            }
          })
        }
      })
    }
  }
