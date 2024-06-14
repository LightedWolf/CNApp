import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutchartCardComponent } from './donutchart-card.component';

describe('DonutchartCardComponent', () => {
  let component: DonutchartCardComponent;
  let fixture: ComponentFixture<DonutchartCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonutchartCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DonutchartCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
