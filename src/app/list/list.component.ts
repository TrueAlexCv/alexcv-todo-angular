import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/item.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-list',
  imports: [],
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

  toggleFavoriteList(toggle: string) {
    switch(toggle) {
      case 'all':
        this.items = this.listService.getItems();
        break;
      case 'favorites':
        this.items = this.listService.getItems().filter(i => i.favorite);
        break;
      default:
        this.items = this.listService.getItems();
        break;
    }
  }
}
