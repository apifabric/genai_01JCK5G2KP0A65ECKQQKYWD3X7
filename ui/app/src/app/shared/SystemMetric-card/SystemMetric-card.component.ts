import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './SystemMetric-card.component.html',
  styleUrls: ['./SystemMetric-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.SystemMetric-card]': 'true'
  }
})

export class SystemMetricCardComponent {


}