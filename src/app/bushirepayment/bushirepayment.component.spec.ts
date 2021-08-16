import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BushirepaymentComponent } from './bushirepayment.component';

describe('BushirepaymentComponent', () => {
  let component: BushirepaymentComponent;
  let fixture: ComponentFixture<BushirepaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BushirepaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BushirepaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
