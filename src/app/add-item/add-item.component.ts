import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import * as customErrorMsg from '../common/customErrorMsg';
import { ListService } from '../services/item.service';
import { Item } from '../models/item';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-add-item',
  imports: [ReactiveFormsModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatCheckboxModule],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent {
  itemForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    favorite: new FormControl(false)
  });

  @ViewChild(FormGroupDirective) private formDir!: FormGroupDirective;

  constructor(private listService: ListService) { }

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
    if (this.itemForm.valid) {
      const name = this.itemForm.value.name ?? '';
      const favorite = this.itemForm.value.favorite ?? false;
      const item = new Item(0, name, favorite);
      this.listService.addItem(item);
      this.formDir.resetForm();
    } else {
      this.itemForm.reset({
        name: '',
        favorite: false
      });
    }
  }
}
