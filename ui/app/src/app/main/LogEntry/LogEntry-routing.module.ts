import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogEntryHomeComponent } from './home/LogEntry-home.component';
import { LogEntryNewComponent } from './new/LogEntry-new.component';
import { LogEntryDetailComponent } from './detail/LogEntry-detail.component';

const routes: Routes = [
  {path: '', component: LogEntryHomeComponent},
  { path: 'new', component: LogEntryNewComponent },
  { path: ':id', component: LogEntryDetailComponent,
    data: {
      oPermission: {
        permissionId: 'LogEntry-detail-permissions'
      }
    }
  },{
    path: ':log_entry_id/Alert', loadChildren: () => import('../Alert/Alert.module').then(m => m.AlertModule),
    data: {
        oPermission: {
            permissionId: 'Alert-detail-permissions'
        }
    }
},{
    path: ':log_entry_id/CpuUsage', loadChildren: () => import('../CpuUsage/CpuUsage.module').then(m => m.CpuUsageModule),
    data: {
        oPermission: {
            permissionId: 'CpuUsage-detail-permissions'
        }
    }
},{
    path: ':log_entry_id/SystemEvent', loadChildren: () => import('../SystemEvent/SystemEvent.module').then(m => m.SystemEventModule),
    data: {
        oPermission: {
            permissionId: 'SystemEvent-detail-permissions'
        }
    }
},{
    path: ':log_entry_id/SystemMetric', loadChildren: () => import('../SystemMetric/SystemMetric.module').then(m => m.SystemMetricModule),
    data: {
        oPermission: {
            permissionId: 'SystemMetric-detail-permissions'
        }
    }
},{
    path: ':log_entry_id/ThresholdLog', loadChildren: () => import('../ThresholdLog/ThresholdLog.module').then(m => m.ThresholdLogModule),
    data: {
        oPermission: {
            permissionId: 'ThresholdLog-detail-permissions'
        }
    }
},{
    path: ':log_entry_id/UserActivity', loadChildren: () => import('../UserActivity/UserActivity.module').then(m => m.UserActivityModule),
    data: {
        oPermission: {
            permissionId: 'UserActivity-detail-permissions'
        }
    }
}
];

export const LOGENTRY_MODULE_DECLARATIONS = [
    LogEntryHomeComponent,
    LogEntryNewComponent,
    LogEntryDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogEntryRoutingModule { }