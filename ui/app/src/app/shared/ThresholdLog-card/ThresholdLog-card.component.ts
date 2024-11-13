import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ThresholdLog-card.component.html',
  styleUrls: ['./ThresholdLog-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ThresholdLog-card]': 'true'
  }
})

export class ThresholdLogCardComponent {


}