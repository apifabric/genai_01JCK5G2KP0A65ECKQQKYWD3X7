import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThresholdLogHomeComponent } from './home/ThresholdLog-home.component';
import { ThresholdLogNewComponent } from './new/ThresholdLog-new.component';
import { ThresholdLogDetailComponent } from './detail/ThresholdLog-detail.component';

const routes: Routes = [
  {path: '', component: ThresholdLogHomeComponent},
  { path: 'new', component: ThresholdLogNewComponent },
  { path: ':id', component: ThresholdLogDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ThresholdLog-detail-permissions'
      }
    }
  }
];

export const THRESHOLDLOG_MODULE_DECLARATIONS = [
    ThresholdLogHomeComponent,
    ThresholdLogNewComponent,
    ThresholdLogDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThresholdLogRoutingModule { }