import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.css']
})
export class FloorComponent implements OnInit {
  floorWidth:number=300;
  floorHeight:number=300;
  settingNumber:number = 0;
  spacesNumber:number = 1;

  settingSwitch(settingIndex:number){
    this.settingNumber = settingIndex;
  }
  constructor() { }

  ngOnInit() {
  }

}
