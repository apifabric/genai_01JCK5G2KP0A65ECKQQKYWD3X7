import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './CpuUsage-card.component.html',
  styleUrls: ['./CpuUsage-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.CpuUsage-card]': 'true'
  }
})

export class CpuUsageCardComponent {


}