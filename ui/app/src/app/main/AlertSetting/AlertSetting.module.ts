import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {ALERTSETTING_MODULE_DECLARATIONS, AlertSettingRoutingModule} from  './AlertSetting-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    AlertSettingRoutingModule
  ],
  declarations: ALERTSETTING_MODULE_DECLARATIONS,
  exports: ALERTSETTING_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AlertSettingModule { }