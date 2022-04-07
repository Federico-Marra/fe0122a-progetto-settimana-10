import { Component, OnInit } from '@angular/core';
import { cart } from './products.service';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="container navbar-light bg-light fixed-top">
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a
            class="nav-link"
            routerLink="/"
            routerLinkActive="router-link-active"
            [routerLinkActiveOptions]="{ exact: true }"
          >
            <button
              class="btn-home nav-link active btn btn-primary position-relative"
              aria-current="page"
            >
              Home
            </button></a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            routerLink="/cart"
            routerLinkActive="router-link-active"
            ><button type="button" class="btn btn-primary position-relative">
              Carrello
              <span
                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              >
                {{ wCart.length }}
                <span class="visually-hidden">unread messages</span>
              </span>
            </button></a
          >
        </li>
      </ul>
</nav>
  `,
  styles: [
    `
      .btn-home:hover,
      .btn-home:active,
      .btn-home:focus {
        color: white;
      }
      .btn-home {
        padding: 7px;
      }
    `,
  ],
})
export class NavbarComponent implements OnInit {
  wCart = cart;

  constructor() {}

  ngOnInit(): void {}
}
