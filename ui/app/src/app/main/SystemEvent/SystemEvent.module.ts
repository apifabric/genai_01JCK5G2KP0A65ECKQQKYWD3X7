import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {SYSTEMEVENT_MODULE_DECLARATIONS, SystemEventRoutingModule} from  './SystemEvent-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    SystemEventRoutingModule
  ],
  declarations: SYSTEMEVENT_MODULE_DECLARATIONS,
  exports: SYSTEMEVENT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SystemEventModule { }