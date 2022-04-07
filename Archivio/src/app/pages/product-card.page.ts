import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { Art } from '../inteface/product';
import * as Service from '../products.service';

@Component({
  template: `
    <div class="card position-relative ">
      <div *ngIf="art" class=" cnt-list card-body rounded text-center">
        <img src="{{art.img}}" class="card-img-top" alt="..."> <br />
        <h5 class="card-title">{{ art.title }}</h5>
        <p class="card-text">
          {{ art.description }} <br />
          {{ art.price | currency: 'EUR' }}
        </p>
        <div class="card-footer mt-5 d-flex justify-content-around">
          <button type="button" class="btn btn-dark m-1" [routerLink]="['/']">
            Torna al negozio
          </button>
          <button type="button" class="btn btn-success m-1" (click)="aggiungi()">
            Aggiungi al carrello
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
  .cnt-list{
    position: absolute;
    top: 150px;
    width: 100%;
  }
  img{
    width: 50%;
    heigth: 50%;
  }

  `]
})
export class ProductCardPage implements OnInit {

  art!:Art;
  sub!: Subscription

  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.router.params.subscribe((params:Params)=>{
      this.art = <Art>params;
      console.log(params)
    });
  }

  aggiungi(){
    Service.addToCart(this.art);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.sub.unsubscribe();
  }

}
