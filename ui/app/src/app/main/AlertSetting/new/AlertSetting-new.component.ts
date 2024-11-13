import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'AlertSetting-new',
  templateUrl: './AlertSetting-new.component.html',
  styleUrls: ['./AlertSetting-new.component.scss']
})
export class AlertSettingNewComponent {
  @ViewChild("AlertSettingForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}