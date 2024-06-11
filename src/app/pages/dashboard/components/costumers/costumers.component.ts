import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CostumerService } from '../../../../services/costumer/costumer.service';
import { LoginService } from '../../../../services/login/login.service';
import { Costumer } from '../../../../core/interface/costumer.interface';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-costumers',
  standalone: true,
  templateUrl: './costumers.component.html',
  styleUrl: './costumers.component.css',
  imports: [FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CostumersComponent implements OnInit {
  constructor(
    public costumerService: CostumerService,
    public loginService: LoginService,
    private router: Router
  ) {}
  costumers: Costumer[] = [];
  costumer: Costumer = {
    name: '',
    phone: undefined,
    email: '',
    createdBy: '',
  };
  gettedCostumer: Costumer = {
    _id: '',
    name: '',
    phone: undefined,
    email: '',
    createdBy: '',
  };
  ngOnInit(): void {
    this.getCostumers();
  }
  getCostumers() {
    const id = this.loginService.getId();
    this.costumerService.getAllCostumers(id).subscribe((response) => {
      this.costumers = response.allCostumers;
    });
  }
  async setCostumer() {
    const id = this.loginService.getId();
    this.costumer.createdBy = id;

    try {
      this.costumerService.createCostumer(this.costumer);
      this.costumers.push(this.costumer);
    } catch (error) {
      console.error(error);
    }
  }

  async getACostumer(email: string) {
    try {
      this.costumerService.getACostumer(email).subscribe((response) => {
        this.gettedCostumer = response.costumer;
        console.log(this.gettedCostumer);
      });
    } catch (error) {
      console.error(error);
    }
  }
  async updateCostumer() {
    const id = this.gettedCostumer._id;
    const costumerData = this.gettedCostumer;
    try {
      this.costumerService
        .updateACostumer(id, costumerData)
        .subscribe((response) => {
          console.log('Backend Response: ', response);
        });
    } catch (error) {
      console.error(error);
    }
  }
  async deleteCostumer() {
    const id = this.gettedCostumer._id;
    try {
      this.costumerService.deleteACostumer(id).subscribe((response) => {
        console.log('Backend Response: ', response);
      });
    } catch (error) {
      console.error(error);
    }
  }
  open(dialog: HTMLDialogElement) {
    dialog.showModal();
  }
  close(dialog: HTMLDialogElement) {
    dialog.close();
  }
}
