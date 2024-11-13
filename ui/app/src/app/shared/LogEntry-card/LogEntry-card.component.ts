import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './LogEntry-card.component.html',
  styleUrls: ['./LogEntry-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.LogEntry-card]': 'true'
  }
})

export class LogEntryCardComponent {


}