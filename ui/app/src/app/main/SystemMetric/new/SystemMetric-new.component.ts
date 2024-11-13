import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'SystemMetric-new',
  templateUrl: './SystemMetric-new.component.html',
  styleUrls: ['./SystemMetric-new.component.scss']
})
export class SystemMetricNewComponent {
  @ViewChild("SystemMetricForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}