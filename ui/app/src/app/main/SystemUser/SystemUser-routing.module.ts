import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemUserHomeComponent } from './home/SystemUser-home.component';
import { SystemUserNewComponent } from './new/SystemUser-new.component';
import { SystemUserDetailComponent } from './detail/SystemUser-detail.component';

const routes: Routes = [
  {path: '', component: SystemUserHomeComponent},
  { path: 'new', component: SystemUserNewComponent },
  { path: ':id', component: SystemUserDetailComponent,
    data: {
      oPermission: {
        permissionId: 'SystemUser-detail-permissions'
      }
    }
  }
];

export const SYSTEMUSER_MODULE_DECLARATIONS = [
    SystemUserHomeComponent,
    SystemUserNewComponent,
    SystemUserDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemUserRoutingModule { }