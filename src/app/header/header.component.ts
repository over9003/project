import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() display = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(param: string){
      this.display.emit(param)
  }

}
