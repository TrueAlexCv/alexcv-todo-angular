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

  constructor(public listService: ListService) {
    this.items =  [];
  }

  ngOnInit(): void {
    this.items = this.listService.getItems();
  }
}
