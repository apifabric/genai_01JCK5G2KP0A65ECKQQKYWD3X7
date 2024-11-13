import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopologyChangeHomeComponent } from './home/TopologyChange-home.component';
import { TopologyChangeNewComponent } from './new/TopologyChange-new.component';
import { TopologyChangeDetailComponent } from './detail/TopologyChange-detail.component';

const routes: Routes = [
  {path: '', component: TopologyChangeHomeComponent},
  { path: 'new', component: TopologyChangeNewComponent },
  { path: ':id', component: TopologyChangeDetailComponent,
    data: {
      oPermission: {
        permissionId: 'TopologyChange-detail-permissions'
      }
    }
  }
];

export const TOPOLOGYCHANGE_MODULE_DECLARATIONS = [
    TopologyChangeHomeComponent,
    TopologyChangeNewComponent,
    TopologyChangeDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopologyChangeRoutingModule { }