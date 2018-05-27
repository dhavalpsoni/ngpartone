import { Component, OnInit,Optional } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  /*styleUrls:['https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'],*/
  styles: [`
  p{font-weight:bold}
  div{color:gray;}
    `]
})
export class HomeComponent implements OnInit {
itemCount: number;
btnText:  string = 'Add an Item';
itemName: string = 'Item 1 text';
hide : boolean;
items=[];
addItem = function() {
this.items.push(this.itemName);

this.itemName="";
this.itemCount= this.items.length;
this.itemService.getNextItem(this.items);
};
removeItem(index){
  this.items.splice(index,1);
  this.itemCount= this.items.length;
  this.itemService.getNextItem(this.items);
}
constructor(private itemService:ItemService) { }
  ngOnInit() {
  this.hide = true;
    this.itemService.item.subscribe(r=>this.items = r);
  this.itemService.getNextItem(this.items);
  this.itemCount= this.items.length;
}
}
