import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'SystemUser-new',
  templateUrl: './SystemUser-new.component.html',
  styleUrls: ['./SystemUser-new.component.scss']
})
export class SystemUserNewComponent {
  @ViewChild("SystemUserForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}