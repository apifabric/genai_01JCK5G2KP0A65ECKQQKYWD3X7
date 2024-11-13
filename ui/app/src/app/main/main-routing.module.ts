import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Alert', loadChildren: () => import('./Alert/Alert.module').then(m => m.AlertModule) },
    
        { path: 'AlertSetting', loadChildren: () => import('./AlertSetting/AlertSetting.module').then(m => m.AlertSettingModule) },
    
        { path: 'CpuUsage', loadChildren: () => import('./CpuUsage/CpuUsage.module').then(m => m.CpuUsageModule) },
    
        { path: 'LogEntry', loadChildren: () => import('./LogEntry/LogEntry.module').then(m => m.LogEntryModule) },
    
        { path: 'Notification', loadChildren: () => import('./Notification/Notification.module').then(m => m.NotificationModule) },
    
        { path: 'Process', loadChildren: () => import('./Process/Process.module').then(m => m.ProcessModule) },
    
        { path: 'SystemEvent', loadChildren: () => import('./SystemEvent/SystemEvent.module').then(m => m.SystemEventModule) },
    
        { path: 'SystemMetric', loadChildren: () => import('./SystemMetric/SystemMetric.module').then(m => m.SystemMetricModule) },
    
        { path: 'SystemUser', loadChildren: () => import('./SystemUser/SystemUser.module').then(m => m.SystemUserModule) },
    
        { path: 'ThresholdLog', loadChildren: () => import('./ThresholdLog/ThresholdLog.module').then(m => m.ThresholdLogModule) },
    
        { path: 'TopologyChange', loadChildren: () => import('./TopologyChange/TopologyChange.module').then(m => m.TopologyChangeModule) },
    
        { path: 'UserActivity', loadChildren: () => import('./UserActivity/UserActivity.module').then(m => m.UserActivityModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }