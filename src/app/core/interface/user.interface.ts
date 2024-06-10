export interface User {
  birth?: Date;
  email: string;
  // Identity Card, no ID due to possible confusion with DB ID:
  icNumber?: string;
  icType?: string;
  name?: string;
  password: string;
  phone?: number;
  role?: string;
}
