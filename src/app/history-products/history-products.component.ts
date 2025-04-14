import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HISTORY_PRODUCTS } from './shared/history-products';

@Component({
  selector: 'app-history-products',
  imports: [ FooterComponent, RouterLink ],
  templateUrl: './history-products.component.html',
  styleUrl: './history-products.component.css'
})
export class HistoryProductsComponent {
  historyProducts = HISTORY_PRODUCTS;
}
