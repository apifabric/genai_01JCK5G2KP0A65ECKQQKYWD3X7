import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'TopologyChange-new',
  templateUrl: './TopologyChange-new.component.html',
  styleUrls: ['./TopologyChange-new.component.scss']
})
export class TopologyChangeNewComponent {
  @ViewChild("TopologyChangeForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}