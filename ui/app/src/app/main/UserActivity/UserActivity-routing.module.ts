import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserActivityHomeComponent } from './home/UserActivity-home.component';
import { UserActivityNewComponent } from './new/UserActivity-new.component';
import { UserActivityDetailComponent } from './detail/UserActivity-detail.component';

const routes: Routes = [
  {path: '', component: UserActivityHomeComponent},
  { path: 'new', component: UserActivityNewComponent },
  { path: ':id', component: UserActivityDetailComponent,
    data: {
      oPermission: {
        permissionId: 'UserActivity-detail-permissions'
      }
    }
  }
];

export const USERACTIVITY_MODULE_DECLARATIONS = [
    UserActivityHomeComponent,
    UserActivityNewComponent,
    UserActivityDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserActivityRoutingModule { }