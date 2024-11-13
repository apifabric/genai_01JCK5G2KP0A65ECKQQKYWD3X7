import { MenuRootItem } from 'ontimize-web-ngx';

import { AlertCardComponent } from './Alert-card/Alert-card.component';

import { AlertSettingCardComponent } from './AlertSetting-card/AlertSetting-card.component';

import { CpuUsageCardComponent } from './CpuUsage-card/CpuUsage-card.component';

import { LogEntryCardComponent } from './LogEntry-card/LogEntry-card.component';

import { NotificationCardComponent } from './Notification-card/Notification-card.component';

import { ProcessCardComponent } from './Process-card/Process-card.component';

import { SystemEventCardComponent } from './SystemEvent-card/SystemEvent-card.component';

import { SystemMetricCardComponent } from './SystemMetric-card/SystemMetric-card.component';

import { SystemUserCardComponent } from './SystemUser-card/SystemUser-card.component';

import { ThresholdLogCardComponent } from './ThresholdLog-card/ThresholdLog-card.component';

import { TopologyChangeCardComponent } from './TopologyChange-card/TopologyChange-card.component';

import { UserActivityCardComponent } from './UserActivity-card/UserActivity-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Alert', name: 'ALERT', icon: 'view_list', route: '/main/Alert' }
    
        ,{ id: 'AlertSetting', name: 'ALERTSETTING', icon: 'view_list', route: '/main/AlertSetting' }
    
        ,{ id: 'CpuUsage', name: 'CPUUSAGE', icon: 'view_list', route: '/main/CpuUsage' }
    
        ,{ id: 'LogEntry', name: 'LOGENTRY', icon: 'view_list', route: '/main/LogEntry' }
    
        ,{ id: 'Notification', name: 'NOTIFICATION', icon: 'view_list', route: '/main/Notification' }
    
        ,{ id: 'Process', name: 'PROCESS', icon: 'view_list', route: '/main/Process' }
    
        ,{ id: 'SystemEvent', name: 'SYSTEMEVENT', icon: 'view_list', route: '/main/SystemEvent' }
    
        ,{ id: 'SystemMetric', name: 'SYSTEMMETRIC', icon: 'view_list', route: '/main/SystemMetric' }
    
        ,{ id: 'SystemUser', name: 'SYSTEMUSER', icon: 'view_list', route: '/main/SystemUser' }
    
        ,{ id: 'ThresholdLog', name: 'THRESHOLDLOG', icon: 'view_list', route: '/main/ThresholdLog' }
    
        ,{ id: 'TopologyChange', name: 'TOPOLOGYCHANGE', icon: 'view_list', route: '/main/TopologyChange' }
    
        ,{ id: 'UserActivity', name: 'USERACTIVITY', icon: 'view_list', route: '/main/UserActivity' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    AlertCardComponent

    ,AlertSettingCardComponent

    ,CpuUsageCardComponent

    ,LogEntryCardComponent

    ,NotificationCardComponent

    ,ProcessCardComponent

    ,SystemEventCardComponent

    ,SystemMetricCardComponent

    ,SystemUserCardComponent

    ,ThresholdLogCardComponent

    ,TopologyChangeCardComponent

    ,UserActivityCardComponent

];