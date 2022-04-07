import { Component, OnInit } from '@angular/core';

import * as Service from '../products.service';
import { Art } from '../inteface/product';
import { HttpClient } from '@angular/common/http';

@Component({
  template: `
    <div class="container position-relative">
      <div *ngIf="Loading" class="container d-flex justify-content-center">
        <div
          class="spinner-grow"
          style="width: 3rem; height: 3rem;"
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>

      <div class="cnt-list d-flex justify-content-evenly position-absolute">
        <div class="row text-center">
          <div class="col-sm-4" *ngFor="let art of artsNeg">
            <div class="card-body border border-dark m-3 rounded-3">

              <img src="{{art.img}}" class="card-img-top p-2 m-2" alt="immagine, {{art.title}}">
              <h5 class="card-title">{{ art.title }}</h5>
              <p class="card-text">
                {{ art.description }} <br />
                <b>{{ art.price | currency: 'EUR' }}</b>
              </p>
              <button
                type="button"
                class="btn btn-primary"
                [routerLink]="['./product-card', art]"
              >
                Dettagli
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
  .cnt-list{
    position: absolute;
    top: 150px;
  }
  `],
})
export class ProductListPage implements OnInit {
  artsNeg: Art[] = [];

  Loading = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.Loading = true;
    setInterval(() => {
      if (this.artsNeg != []) {
        this.Loading = false;
      }
      this.artsNeg = Service.arts;
    }, 500);
  }
}
