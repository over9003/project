import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() newListElement = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  onAdd(name, amount){
    this.newListElement.emit(new Ingredient(name.value, amount.value))
  }

}
