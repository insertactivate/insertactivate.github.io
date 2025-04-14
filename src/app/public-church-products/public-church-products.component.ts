import { Component } from '@angular/core';
import { RouterLink } from "@angular/router"
import { FooterComponent } from '../footer/footer.component';
import { PUBLIC_CHURCH_PRODUCTS } from './shared/public-church-products';
import { ChurchesComponent } from '../churches/churches.component';

@Component({
  selector: 'app-public-church-products',
  imports: [ FooterComponent, RouterLink, ChurchesComponent ],
  templateUrl: './public-church-products.component.html',
  styleUrl: './public-church-products.component.css'
})
export class PublicChurchProductsComponent {
  publicChurchProducts = PUBLIC_CHURCH_PRODUCTS;
}
