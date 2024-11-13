import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './AlertSetting-card.component.html',
  styleUrls: ['./AlertSetting-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.AlertSetting-card]': 'true'
  }
})

export class AlertSettingCardComponent {


}