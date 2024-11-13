import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'UserActivity-new',
  templateUrl: './UserActivity-new.component.html',
  styleUrls: ['./UserActivity-new.component.scss']
})
export class UserActivityNewComponent {
  @ViewChild("UserActivityForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}