import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Process-card.component.html',
  styleUrls: ['./Process-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Process-card]': 'true'
  }
})

export class ProcessCardComponent {


}