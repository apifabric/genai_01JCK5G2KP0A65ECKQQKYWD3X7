import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './SystemEvent-card.component.html',
  styleUrls: ['./SystemEvent-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.SystemEvent-card]': 'true'
  }
})

export class SystemEventCardComponent {


}