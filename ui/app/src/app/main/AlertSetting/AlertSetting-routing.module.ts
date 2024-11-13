import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertSettingHomeComponent } from './home/AlertSetting-home.component';
import { AlertSettingNewComponent } from './new/AlertSetting-new.component';
import { AlertSettingDetailComponent } from './detail/AlertSetting-detail.component';

const routes: Routes = [
  {path: '', component: AlertSettingHomeComponent},
  { path: 'new', component: AlertSettingNewComponent },
  { path: ':id', component: AlertSettingDetailComponent,
    data: {
      oPermission: {
        permissionId: 'AlertSetting-detail-permissions'
      }
    }
  },{
    path: ':alert_settings_id/ThresholdLog', loadChildren: () => import('../ThresholdLog/ThresholdLog.module').then(m => m.ThresholdLogModule),
    data: {
        oPermission: {
            permissionId: 'ThresholdLog-detail-permissions'
        }
    }
}
];

export const ALERTSETTING_MODULE_DECLARATIONS = [
    AlertSettingHomeComponent,
    AlertSettingNewComponent,
    AlertSettingDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlertSettingRoutingModule { }