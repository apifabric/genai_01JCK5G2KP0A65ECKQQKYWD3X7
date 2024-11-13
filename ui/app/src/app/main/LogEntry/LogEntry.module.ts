import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {LOGENTRY_MODULE_DECLARATIONS, LogEntryRoutingModule} from  './LogEntry-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    LogEntryRoutingModule
  ],
  declarations: LOGENTRY_MODULE_DECLARATIONS,
  exports: LOGENTRY_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LogEntryModule { }