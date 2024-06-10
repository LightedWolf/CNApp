import { Component, Input } from '@angular/core';
import { Costumer } from '../../../../../../core/interface/costumer.interface';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css',
})
export class EditUserComponent {
  @Input() costumer: Costumer = {
    name: '',
    email: '',
    createdBy: '',
  };
}
