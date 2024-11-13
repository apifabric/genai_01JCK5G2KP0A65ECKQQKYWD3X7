import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcessHomeComponent } from './home/Process-home.component';
import { ProcessNewComponent } from './new/Process-new.component';
import { ProcessDetailComponent } from './detail/Process-detail.component';

const routes: Routes = [
  {path: '', component: ProcessHomeComponent},
  { path: 'new', component: ProcessNewComponent },
  { path: ':id', component: ProcessDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Process-detail-permissions'
      }
    }
  }
];

export const PROCESS_MODULE_DECLARATIONS = [
    ProcessHomeComponent,
    ProcessNewComponent,
    ProcessDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessRoutingModule { }