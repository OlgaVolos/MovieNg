import {Component, OnInit, Output} from '@angular/core';
import {Movie} from "../../../../models";

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit{


  currentRate = 8;

  constructor() {


  }
  ngOnInit(): void {

  }

}
