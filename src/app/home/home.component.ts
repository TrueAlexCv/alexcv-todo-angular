import { Component } from '@angular/core';
import { ListComponent } from "../list/list.component";
import { AddItemComponent } from "../add-item/add-item.component";
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-home',
  imports: [ListComponent, AddItemComponent, MatToolbarModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
