import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {SYSTEMUSER_MODULE_DECLARATIONS, SystemUserRoutingModule} from  './SystemUser-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    SystemUserRoutingModule
  ],
  declarations: SYSTEMUSER_MODULE_DECLARATIONS,
  exports: SYSTEMUSER_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SystemUserModule { }