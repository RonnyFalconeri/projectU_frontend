import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { ProjectDetailPageComponent } from './components/project-detail-page/project-detail-page.component';
import { ProjectEditComponent } from './components/project-edit/project-edit.component';
import { Project } from './shared/models/Project';

const routes: Routes = [
  {
    path: '',
    component: OverviewComponent
  },
  {
    path: 'project/:id',
    component: ProjectDetailPageComponent
  },
  {
    path: 'project/:id',
    children: [
      {
        path: '',
        component: ProjectDetailPageComponent
      },
      {
        path: 'edit',
        component: ProjectEditComponent
      }
    ]
  },
  {
    path: 'new',
    children: [
      {
        path: 'project',
        component: ProjectEditComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
