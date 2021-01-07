import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidanavComponent } from './sidanav.component';

describe('SidanavComponent', () => {
  let component: SidanavComponent;
  let fixture: ComponentFixture<SidanavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidanavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidanavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
