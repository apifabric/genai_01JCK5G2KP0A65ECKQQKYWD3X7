import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CpuUsageHomeComponent } from './home/CpuUsage-home.component';
import { CpuUsageNewComponent } from './new/CpuUsage-new.component';
import { CpuUsageDetailComponent } from './detail/CpuUsage-detail.component';

const routes: Routes = [
  {path: '', component: CpuUsageHomeComponent},
  { path: 'new', component: CpuUsageNewComponent },
  { path: ':id', component: CpuUsageDetailComponent,
    data: {
      oPermission: {
        permissionId: 'CpuUsage-detail-permissions'
      }
    }
  },{
    path: ':cpu_usage_id/Process', loadChildren: () => import('../Process/Process.module').then(m => m.ProcessModule),
    data: {
        oPermission: {
            permissionId: 'Process-detail-permissions'
        }
    }
}
];

export const CPUUSAGE_MODULE_DECLARATIONS = [
    CpuUsageHomeComponent,
    CpuUsageNewComponent,
    CpuUsageDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CpuUsageRoutingModule { }