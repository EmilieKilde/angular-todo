import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from "./item";
import { ItemComponent } from "./item/item.component";

@Component({
  standalone: true, /*kræves der ngmodule eller ej */
  selector: 'app-root', /*fortæller CSS at den skal placere dette component */
  imports: [CommonModule, ItemComponent], /*dependencies */
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

  addItem(description: string){
    if(!description) return;

    /*unshift adder item til begyndelsen af array(toppen) - alternativt ville push() lægge den sidst på listen */
    this.allItems.unshift({
      description,
      done: false,
    });
  }

  get items(){
    if(this.filter === "all"){
      return this.allItems;
    }
    return this.allItems.filter((item) => this.filter==="done" ? item.done : !item.done,
    );
  } 
   remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
}
 