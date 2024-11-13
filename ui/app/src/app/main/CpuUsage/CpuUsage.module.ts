import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {CPUUSAGE_MODULE_DECLARATIONS, CpuUsageRoutingModule} from  './CpuUsage-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    CpuUsageRoutingModule
  ],
  declarations: CPUUSAGE_MODULE_DECLARATIONS,
  exports: CPUUSAGE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CpuUsageModule { }