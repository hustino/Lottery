import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringLotteryComponent } from './recurring-lottery.component';

describe('RecurringLotteryComponent', () => {
  let component: RecurringLotteryComponent;
  let fixture: ComponentFixture<RecurringLotteryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecurringLotteryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecurringLotteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
