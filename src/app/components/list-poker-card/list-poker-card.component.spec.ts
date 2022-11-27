import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPokerCardComponent } from './list-poker-card.component';

describe('ListPokerCardComponent', () => {
  let component: ListPokerCardComponent;
  let fixture: ComponentFixture<ListPokerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPokerCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPokerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
