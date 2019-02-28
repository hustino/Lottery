import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerballLotteryComponent } from './powerball-lottery.component';

describe('PowerballLotteryComponent', () => {
  let component: PowerballLotteryComponent;
  let fixture: ComponentFixture<PowerballLotteryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerballLotteryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerballLotteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
