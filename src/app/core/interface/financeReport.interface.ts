export interface FinanceReport {
  costumer?: string;
  description: string;
  type: string;
  currency: string;
  value: number;
  createdBy: string;
  date: Date;
  project: string;
  lastUpdated: Date;
}
