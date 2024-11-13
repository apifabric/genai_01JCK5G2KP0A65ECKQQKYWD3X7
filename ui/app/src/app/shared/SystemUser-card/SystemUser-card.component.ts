import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './SystemUser-card.component.html',
  styleUrls: ['./SystemUser-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.SystemUser-card]': 'true'
  }
})

export class SystemUserCardComponent {


}