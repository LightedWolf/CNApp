import { Component } from '@angular/core';
import { FinanceCardComponent } from '../finance-card/finance-card.component';
import { BarchartCardComponent } from '../barchart-card/barchart-card.component';

@Component({
  selector: 'app-finance',
  standalone: true,
  templateUrl: './finance.component.html',
  styleUrl: './finance.component.css',
  imports: [FinanceCardComponent, BarchartCardComponent],
})
export class FinanceComponent {}
