import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicChurchProductsComponent } from './public-church-products.component';

describe('PublicChurchProductsComponent', () => {
  let component: PublicChurchProductsComponent;
  let fixture: ComponentFixture<PublicChurchProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicChurchProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicChurchProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
