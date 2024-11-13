import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemEventHomeComponent } from './home/SystemEvent-home.component';
import { SystemEventNewComponent } from './new/SystemEvent-new.component';
import { SystemEventDetailComponent } from './detail/SystemEvent-detail.component';

const routes: Routes = [
  {path: '', component: SystemEventHomeComponent},
  { path: 'new', component: SystemEventNewComponent },
  { path: ':id', component: SystemEventDetailComponent,
    data: {
      oPermission: {
        permissionId: 'SystemEvent-detail-permissions'
      }
    }
  }
];

export const SYSTEMEVENT_MODULE_DECLARATIONS = [
    SystemEventHomeComponent,
    SystemEventNewComponent,
    SystemEventDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemEventRoutingModule { }