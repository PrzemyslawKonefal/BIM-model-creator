import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floors',
  templateUrl: './floors.component.html',
  styleUrls: ['./floors.component.css']
})
export class FloorsComponent implements OnInit {
  floorsNumber = 0;
  floors = Array();
  FloorSizes: = Array();
  refreshFloors(){
    this.floors = Array(this.floorsNumber).fill(1);
  }
  checkSizes(floorSizes: {floorWidth:number, floorHeight:number}, i){
    this.FloorSizes[i] = floorSizes;
  }
  constructor() {
   }

  ngOnInit() {
  }

}
