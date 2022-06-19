import { Component } from '@angular/core';
import { Item } from './Item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'starter-app';
  // 
  // Receipt - (receipt number, total amount, date, list-of-items)

  receiptNumber: number = 0;
  totalAmount = "Dubu Uku"
  purchaseDate = ""

  itemName = ""
  price = ""
  quantity = ""
  barcode = ""

  constructor() {
    
  }

}
