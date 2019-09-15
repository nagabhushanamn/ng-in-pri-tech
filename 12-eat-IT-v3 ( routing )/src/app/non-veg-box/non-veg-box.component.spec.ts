import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonVegBoxComponent } from './non-veg-box.component';

describe('NonVegBoxComponent', () => {
  let component: NonVegBoxComponent;
  let fixture: ComponentFixture<NonVegBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonVegBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonVegBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
