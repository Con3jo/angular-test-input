import { Component, OnInit } from '@angular/core';

import { GroupTableComponent } from './group-table/group-table.component';

import { TableElement } from './table-element'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //sample elements for input
  tableElementsArray: any[] = [];
  tableCategoriesArray: any[] = [];

  ngOnInit(){
    //initialize table with dummy values
    for(let i = 0;i<3;i++){
      this.tableElementsArray.push([]);
      this.tableCategoriesArray.push([]);
      for(let j = 0; j<10;j++){
        this.tableElementsArray[i].push(new TableElement(i+""+j,null));
      }
    }
  }

}
