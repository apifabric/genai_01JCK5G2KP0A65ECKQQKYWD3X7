import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {THRESHOLDLOG_MODULE_DECLARATIONS, ThresholdLogRoutingModule} from  './ThresholdLog-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ThresholdLogRoutingModule
  ],
  declarations: THRESHOLDLOG_MODULE_DECLARATIONS,
  exports: THRESHOLDLOG_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ThresholdLogModule { }