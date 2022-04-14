import { Component, OnInit } from '@angular/core';
import { OilWell } from 'src/app/data/entities/oil-well.entity';
import { OILWELLS } from 'src/app/fake-data/wells';

@Component({
  selector: 'app-wells',
  templateUrl: './wells.component.html',
  styleUrls: ['./wells.component.css']
})
export class WellsComponent implements OnInit {
  wells: OilWell[] = OILWELLS;
  constructor() { }

  ngOnInit(): void {
  }

}
