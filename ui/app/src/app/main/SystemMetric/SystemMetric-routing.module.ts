import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemMetricHomeComponent } from './home/SystemMetric-home.component';
import { SystemMetricNewComponent } from './new/SystemMetric-new.component';
import { SystemMetricDetailComponent } from './detail/SystemMetric-detail.component';

const routes: Routes = [
  {path: '', component: SystemMetricHomeComponent},
  { path: 'new', component: SystemMetricNewComponent },
  { path: ':id', component: SystemMetricDetailComponent,
    data: {
      oPermission: {
        permissionId: 'SystemMetric-detail-permissions'
      }
    }
  }
];

export const SYSTEMMETRIC_MODULE_DECLARATIONS = [
    SystemMetricHomeComponent,
    SystemMetricNewComponent,
    SystemMetricDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemMetricRoutingModule { }