import { Component, OnInit, Input } from '@angular/core';

import { TableElement } from './table-element';
import { Category } from './category';
@Component({
  selector: 'group-table',
  templateUrl: './group-table.component.html',
  styleUrls: ['./group-table.component.css']
})
export class GroupTableComponent implements OnInit {
  @Input() elements: TableElement[];
  @Input() name: string;
  @Input() categories: Category[];
  activeCategory: Category;

  constructor() { }

  ngOnInit() {
  }

  setActiveCategory(category: Category){
    this.activeCategory = category;
  }

  addCategory(){
    this.categories.push(new Category("category_"+this.categories.length));
    this.setActiveCategory(this.categories[this.categories.length-1]);
  }

  deleteCategory(categoryIndex: number){
    this.categories.splice(-1,categoryIndex);
    for(let element of this.elements){
      element.categoryElement = undefined;
    }
  }

}
