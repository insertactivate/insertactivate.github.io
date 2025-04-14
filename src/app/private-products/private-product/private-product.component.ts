import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FooterComponent } from '../../footer/footer.component';
import { PrivateProduct } from '../shared/private-product.model';
import { PRIVATE_PRODUCTS } from '../shared/private-products';

@Component({
  selector: 'app-private-product',
  imports: [ FooterComponent ],
  templateUrl: './private-product.component.html',
  styleUrl: './private-product.component.css'
})
export class PrivateProductComponent implements OnInit {

  privateProduct: PrivateProduct | undefined;

  constructor(private route: ActivatedRoute) {
  }
  
  ngOnInit() {
    const id = +(this.route.snapshot.paramMap.get('id') ?? -1);
    this.privateProduct = PRIVATE_PRODUCTS.find(item => item.id === id);
  }
}
