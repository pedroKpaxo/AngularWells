import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { OilWell } from 'src/app/data/entities/oil-well.entity';
@Component({
  selector: 'app-well-card',
  templateUrl: './well-card.component.html',
  styleUrls: ['./well-card.component.css']
})
export class WellCardComponent implements OnInit {
  @Input() oilWell!: OilWell;
  @Output() wellInfoEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.wellInfoEvent.emit();
  }
}
