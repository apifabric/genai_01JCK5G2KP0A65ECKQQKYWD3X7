import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {TOPOLOGYCHANGE_MODULE_DECLARATIONS, TopologyChangeRoutingModule} from  './TopologyChange-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    TopologyChangeRoutingModule
  ],
  declarations: TOPOLOGYCHANGE_MODULE_DECLARATIONS,
  exports: TOPOLOGYCHANGE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TopologyChangeModule { }