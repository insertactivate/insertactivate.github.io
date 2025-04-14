import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { ActivatedRoute } from '@angular/router';
import { PublicProduct } from '../shared/public-product.model';
import { PUBLIC_PRODUCTS } from '../shared/public-products';

@Component({
  selector: 'app-public-product',
  imports: [ FooterComponent ],
  templateUrl: './public-product.component.html',
  styleUrl: './public-product.component.css'
})
export class PublicProductComponent implements OnInit {

  publicProduct: PublicProduct | undefined;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = +(this.route.snapshot.paramMap.get('id') ?? -1);
    this.publicProduct = PUBLIC_PRODUCTS.find(item => item.id === id);
  }
}
