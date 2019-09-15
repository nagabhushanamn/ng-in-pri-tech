import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegBoxComponent } from './veg-box.component';

describe('VegBoxComponent', () => {
  let component: VegBoxComponent;
  let fixture: ComponentFixture<VegBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
