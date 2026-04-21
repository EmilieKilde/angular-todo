import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true, /*kræves der ngmodule eller ej */
  selector: 'app-root', /*fortæller CSS at den skal placere dette component */
  imports: [CommonModule], /*dependencies */
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'My angular to do list';

  filter: "all" | "active" | "done" = "all";

  /*allItems Array */
  allItems = [
    {description: "eat", done: true},
    {description: "sleep", done: false},
    {description: "have fun", done: true},
    {description: "go for a walk", done: true},
  ];

  get items(){
    if(this.filter === "all"){
      return this.allItems;
    }
    return this.allItems.filter((item) => this.filter==="done" ? item.done : !item.done,
    );
  } 
}
