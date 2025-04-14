import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FooterComponent } from '../../footer/footer.component';
import { PublicChurchProduct } from '../shared/public-church-product.model';
import { PUBLIC_CHURCH_PRODUCTS } from '../shared/public-church-products';

@Component({
  selector: 'app-public-church-product',
  imports: [ FooterComponent ],
  templateUrl: './public-church-product.component.html',
  styleUrl: './public-church-product.component.css'
})
export class PublicChurchProductComponent implements OnInit {
  publicChurchProduct: PublicChurchProduct | undefined;

  constructor(private route: ActivatedRoute) {
  }
  
  ngOnInit() {
    const id = +(this.route.snapshot.paramMap.get('id') ?? -1);
    this.publicChurchProduct = PUBLIC_CHURCH_PRODUCTS.find(item => item.id === id);
  }
}
