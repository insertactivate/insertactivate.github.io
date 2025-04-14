import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';

import { PUBLIC_PRODUCTS } from './shared/public-products';


@Component({
  selector: 'app-public-products',
  imports: [ FooterComponent, RouterLink ],
  templateUrl: './public-products.component.html',
  styleUrl: './public-products.component.css'
})
export class PublicProductsComponent {
  publicProducts = PUBLIC_PRODUCTS;
}
