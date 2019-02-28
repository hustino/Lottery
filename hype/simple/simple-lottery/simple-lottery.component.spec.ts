import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleLotteryComponent } from './simple-lottery.component';

describe('SimpleLotteryComponent', () => {
  let component: SimpleLotteryComponent;
  let fixture: ComponentFixture<SimpleLotteryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleLotteryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleLotteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
