import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarchartCardComponent } from './barchart-card.component';

describe('BarchartCardComponent', () => {
  let component: BarchartCardComponent;
  let fixture: ComponentFixture<BarchartCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarchartCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarchartCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
