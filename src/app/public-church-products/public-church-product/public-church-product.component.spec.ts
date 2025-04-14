import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicChurchProductComponent } from './public-church-product.component';

describe('PublicChurchProductComponent', () => {
  let component: PublicChurchProductComponent;
  let fixture: ComponentFixture<PublicChurchProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicChurchProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicChurchProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
