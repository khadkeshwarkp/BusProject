import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BushireComponent } from './bushire.component';

describe('BushireComponent', () => {
  let component: BushireComponent;
  let fixture: ComponentFixture<BushireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BushireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BushireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
