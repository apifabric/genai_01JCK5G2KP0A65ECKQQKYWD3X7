import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {SYSTEMMETRIC_MODULE_DECLARATIONS, SystemMetricRoutingModule} from  './SystemMetric-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    SystemMetricRoutingModule
  ],
  declarations: SYSTEMMETRIC_MODULE_DECLARATIONS,
  exports: SYSTEMMETRIC_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SystemMetricModule { }