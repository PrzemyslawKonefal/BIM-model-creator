import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-spaces',
  templateUrl: './spaces.component.html',
  styleUrls: ['./spaces.component.css']
})
export class SpacesComponent implements OnInit {
  @Input() spacesQuantity:number; 
  constructor() { }

  ngOnInit() {
  }

}
