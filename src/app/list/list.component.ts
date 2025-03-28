import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListService } from '../services/item.service';
import { Item } from '../models/item';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-list',
  imports: [CommonModule, MatButtonModule, MatCheckboxModule, MatToolbarModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  items: Item[];
  selectedFilter: 'all' | 'favorites' = 'all';

  constructor(public listService: ListService) {
    this.items = [];
  }

  ngOnInit(): void {
    this.items = this.listService.getItems();
  }

  onDelete(id: number) {
    this.listService.removeItem(id);
    this.items = this.listService.getItems();
  }

  onFavoriteChange(id: number) {
    this.listService.toggleFavorite(id);
    this.items = this.listService.getItems();
  }

  toggleFavoriteList(toggle: 'all' | 'favorites') {
    this.selectedFilter = toggle;
    switch(toggle) {
      case 'all':
        this.items = this.listService.getItems();
        break;
      case 'favorites':
        this.items = this.listService.getItems().filter(i => i.favorite);
        break;
    }
  }
}
