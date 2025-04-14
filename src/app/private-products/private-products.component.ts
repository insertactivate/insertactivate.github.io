import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';
import { PRIVATE_PRODUCTS } from './shared/private-products';

@Component({
  selector: 'app-private-products',
  imports: [ FooterComponent, RouterLink ],
  templateUrl: './private-products.component.html',
  styleUrl: './private-products.component.css'
})
export class PrivateProductsComponent {
  privateProducts = PRIVATE_PRODUCTS;
}
