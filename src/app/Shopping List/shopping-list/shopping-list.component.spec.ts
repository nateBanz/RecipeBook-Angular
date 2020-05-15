import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingLIstComponent } from './shopping-list.component';

describe('ShoppingLIstComponent', () => {
  let component: ShoppingLIstComponent;
  let fixture: ComponentFixture<ShoppingLIstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingLIstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingLIstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
