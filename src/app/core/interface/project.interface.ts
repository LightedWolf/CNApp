export interface Project {
  _id?: string;
  name: string;
  asignedUsers?: string[];
  budget?: number;
  costumer: string;
  state: string;
  owner: string;
}
