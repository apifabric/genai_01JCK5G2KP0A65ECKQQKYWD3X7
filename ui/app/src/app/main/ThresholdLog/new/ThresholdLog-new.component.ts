import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'ThresholdLog-new',
  templateUrl: './ThresholdLog-new.component.html',
  styleUrls: ['./ThresholdLog-new.component.scss']
})
export class ThresholdLogNewComponent {
  @ViewChild("ThresholdLogForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}