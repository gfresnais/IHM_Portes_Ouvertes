import { Component } from '@angular/core';


@Component({
  selector: 'app-renseignement',
  templateUrl: './renseignement.page.html',
  styleUrls: ['./renseignement.page.scss'],
})
export class RenseignementPage {

public items: any = [];

  constructor() {
    this.items = [
      { expanded: false },
      { expanded: false },
      { expanded: false },
    ];
  }

  expandItem(item): void {
    if (item.expanded) {
      item.expanded = false;
    } else {
      item.expanded = true;
    }
  }

  public class item {

  public title:string

  }

}
