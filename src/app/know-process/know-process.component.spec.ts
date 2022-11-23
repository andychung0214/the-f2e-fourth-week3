import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowProcessComponent } from './know-process.component';

describe('KnowProcessComponent', () => {
  let component: KnowProcessComponent;
  let fixture: ComponentFixture<KnowProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
