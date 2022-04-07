import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import {Art} from './inteface/product';


export let arts: Art[] = [];
export let cart: Art[] = [];

export function addToCart(art:Art){
  console.log(arts);
  console.log(art);

  console.log(arts.indexOf(art));
  cart.push(art);
}

export function removeFromCart(art:Art){
  arts.push(art);
  cart.splice(cart.indexOf(art), 1);
}

export function loadArts(http: HttpClient): void{
  http.get('http://localhost:4201/products').subscribe((res)=>{
    arts = <Art[]>res;
  })
}

