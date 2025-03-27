import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  public  items :  Item[] = [
    { id: 1, name: 'item 1', favorite: true },
    { id: 2, name: 'item 2', favorite: false },
    { id: 3, name: 'item 3', favorite: false },
    { id: 4, name: 'item 4', favorite: false },
    { id: 5, name: 'item 5', favorite: false },
  ];

  constructor() { }

  public getItems(): Item[] {
    return this.items;
  }

  public addItem(item: Item): boolean {
    const maxId = this.items.length > 0 ? Math.max(...this.items.map(i => i.id)) : 0;
    item.id = maxId + 1;
    const index = this.items.push(item);
    if (index != -1) {
      return true;
    }
    return false;
  }

  public removeItem(id: number): boolean {
    const index = this.items.findIndex(i => i.id === id);
    if (index != -1) {
      this.items.splice(index, 1);
      return true;
    }
    return false;
  }

  public toggleFavorite(id: number): boolean {
    const index = this.items.findIndex(i => i.id === id);
    if (index != -1) {
      this.items[index].favorite = !this.items[index].favorite;
      return true;
    }
    return false;
  }
}