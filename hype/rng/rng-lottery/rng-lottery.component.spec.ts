import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RngLotteryComponent } from './rng-lottery.component';

describe('RngLotteryComponent', () => {
  let component: RngLotteryComponent;
  let fixture: ComponentFixture<RngLotteryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RngLotteryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RngLotteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
