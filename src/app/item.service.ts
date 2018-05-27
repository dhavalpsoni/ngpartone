import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }
private items = new BehaviorSubject<any>(['Item 1 from Service','Item 2 from Service']);
item = this.items.asObservable();

getNextItem(item){

this.items.next(item);

}
}
