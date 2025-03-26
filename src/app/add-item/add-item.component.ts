import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import * as customErrorMsg from '../common/customErrorMsg';
import { ListService } from '../services/item.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-add-item',
  imports: [ReactiveFormsModule],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent {
  itemForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    favorite: new FormControl(false)
  });

  constructor(private listService: ListService) {}

  getErrorMessage(field: string): string {
    const control = this.itemForm.get(field);

    if (!control?.errors) {
      return '';
    }

    if (control?.hasError('required')) {
      return 'El campo es obligatorio';
    }
    if (control?.hasError('minlength')) {
      return customErrorMsg.minLengthMsg(control.errors?.['minlength'].requiredLength);
    }
    if (control?.hasError('maxlength')) {
      return customErrorMsg.maxLengthMsg(control.errors?.['maxlength'].requiredLength, control.errors?.['maxlength'].actualLength);
    }

    return customErrorMsg.defaultErrorMsg();
  }

  onSubmit() {
    if(this.itemForm.valid) {
      const name = this.itemForm.value.name ?? '';
      const favorite = this.itemForm.value.favorite ?? false;
      const item = new Item(0, name, favorite);
      this.listService.addItem(item);
      this.itemForm.reset();
    } else {
      console.log('Form is invalid');
    }
  }
}
