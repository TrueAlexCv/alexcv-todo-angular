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
}