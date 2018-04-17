import { Component, OnInit Input } from '@angular/core';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.css']
})
export class SpaceComponent implements OnInit {
  @Input() spaceData: {type: string, width: number, height: number, bottom:number, right:number, isActive:boolean};
  constructor() { }

  ngOnInit() {
  }

}
