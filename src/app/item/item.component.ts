import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListService } from '../services/item.service';
import { Item } from '../models/item';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-item',
  imports: [MatToolbarModule, MatCheckboxModule, MatButtonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() item: Item = { id: 0, name: '', favorite: false };
  @Output() itemDeleted = new EventEmitter<number>();
  @Output() favoriteChange = new EventEmitter<number>();

  constructor(public listService: ListService) {
  }

  onDelete(id: number): void {
    this.itemDeleted.emit(id);
  }

  onFavoriteChange(id: number): void {
    this.favoriteChange.emit(id);
  }
}
