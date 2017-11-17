import { Category } from './category';

export class TableElement {
    name: string;
    categoryElement: Category;

    constructor(name_:string, categoryElement_: Category){
        this.name = name_;
        this.categoryElement = categoryElement_;
    }

    //Set the element category just if is different to the actual value, otherwise reset the category
    setCategory(newCategory: Category){
        if(newCategory != undefined ){
            if(this.categoryElement == undefined || this.categoryElement.name != newCategory.name){
                this.categoryElement = newCategory;
            }else{
                this.categoryElement = undefined;
            }
        }
    }
}
