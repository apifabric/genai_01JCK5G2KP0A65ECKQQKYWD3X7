import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {USERACTIVITY_MODULE_DECLARATIONS, UserActivityRoutingModule} from  './UserActivity-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    UserActivityRoutingModule
  ],
  declarations: USERACTIVITY_MODULE_DECLARATIONS,
  exports: USERACTIVITY_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserActivityModule { }