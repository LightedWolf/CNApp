import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-finance-card',
  standalone: true,
  imports: [],
  templateUrl: './finance-card.component.html',
  styleUrl: './finance-card.component.css',
})
export class FinanceCardComponent implements OnInit {
  @Input() title: string = '';
  @Input() value: number = 0;
  @Input() imgsrc: string = '';
  @Input() bgcolor: string = '';
  constructor() {}

  ngOnInit(): void {}
}
