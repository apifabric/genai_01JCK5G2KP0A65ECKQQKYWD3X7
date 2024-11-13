import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './UserActivity-card.component.html',
  styleUrls: ['./UserActivity-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.UserActivity-card]': 'true'
  }
})

export class UserActivityCardComponent {


}