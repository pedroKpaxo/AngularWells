import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input() text!: string;
  @Output() btnMenu = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  BtnMenu(){
    this.btnMenu.emit
  }
}
