import { Component } from '@angular/core';
import { ListComponent } from "../list/list.component";
import { AddItemComponent } from "../add-item/add-item.component";

@Component({
  selector: 'app-home',
  imports: [ListComponent, AddItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
