import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './TopologyChange-card.component.html',
  styleUrls: ['./TopologyChange-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.TopologyChange-card]': 'true'
  }
})

export class TopologyChangeCardComponent {


}