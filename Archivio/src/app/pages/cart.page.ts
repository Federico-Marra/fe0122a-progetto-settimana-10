import { Component, OnInit } from '@angular/core';
import { Art } from '../inteface/product';
import * as Service from '../products.service';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  template: `
    <section class="cnt-list">
      <div class="card sm mb-4 m-5 position-relative" *ngFor="let art of artCart">
        <div class="sm card-body">
          <img src="{{ art.img }}" alt="" class="d-block float-start m-4" />
          <h5 class="card-title m-4">{{ art.title }}</h5>
          <p class="card-text ">
            {{ art.description }} <br />
            <b>{{ art.price | currency: 'EUR' }}</b>
          </p>
        </div>
      </div>

        <div class="container mb ">
          <h2>Completa l'ordine</h2>
          <form (ngSubmit)="submit()" #f="ngForm">
            <div ngModelGroup="userInfo">
              <div class="form-group">
                <label for="name">Nome</label>
                <input
                  class="form-control"
                  ngModel
                  name="nome"
                  type="text"
                  required
                  #name="ngModel"
                />
                <p *ngIf="name.invalid">* Campo richiesto! *</p>
                <label for="indirizzo">Indirizzo</label>
                <input
                  class="form-control"
                  ngModel
                  name="indirizzo"
                  type="text"
                  required
                  #indirizzo="ngModel"
                />
                <p *ngIf="indirizzo.invalid">* Campo richiesto! *</p>
                <input
                  type="submit"
                  (click)="submit()"
                  [disabled]="f.invalid"
                  value="invia"
                  class="btn btn-success mt-2"
                />
              </div>
            </div>
          </form>
        </div>
    </section>
  `,
  styles: [
    `
      .cnt-list {
        position: absolute;
        top: 150px;
        width: 100%;
      }
      img {
        width: 10%;
        heigth: 10%;
      }
    `,
  ],
})
export class CartPages implements OnInit {
  artCart: Art[] = Service.cart;

  @ViewChild('f', { static: true }) form!: NgForm;

  user: any;

  submit() {
    alert('Il tuo ordine è stato inviato!');
    Service.cart.length = 0;
    this.form.reset();
  }

  constructor() {}

  ngOnInit(): void {}
}
