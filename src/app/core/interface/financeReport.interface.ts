export interface FinanceReport {
  _id?: string;
  costumer?: string;
  description: string;
  type: string;
  currency: string;
  value: number;
  createdBy: string;
  date: Date | undefined;
  project: string;
  lastUpdated: Date | undefined;
}
