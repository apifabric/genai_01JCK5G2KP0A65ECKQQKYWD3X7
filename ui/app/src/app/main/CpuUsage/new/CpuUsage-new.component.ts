import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'CpuUsage-new',
  templateUrl: './CpuUsage-new.component.html',
  styleUrls: ['./CpuUsage-new.component.scss']
})
export class CpuUsageNewComponent {
  @ViewChild("CpuUsageForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}