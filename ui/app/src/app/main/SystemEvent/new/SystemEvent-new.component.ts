import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'SystemEvent-new',
  templateUrl: './SystemEvent-new.component.html',
  styleUrls: ['./SystemEvent-new.component.scss']
})
export class SystemEventNewComponent {
  @ViewChild("SystemEventForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}