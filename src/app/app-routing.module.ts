import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { ProjectDetailPageComponent } from './components/project-detail-page/project-detail-page.component';
import { ProjectEditComponent } from './components/project-edit/project-edit.component';
import { TaskDetailPageComponent } from './components/task-detail-page/task-detail-page.component';
import { TaskEditComponent } from './components/task-edit/task-edit.component';

const routes: Routes = [
  {
    path: '',
    component: OverviewComponent
  },
  {
    path: 'project/:projectId',
    children: [
      {
        path: '',
        component: ProjectDetailPageComponent
      },
      {
        path: 'task/:taskId',
        component: TaskDetailPageComponent
      }
    ]
  },
  {
    path: 'edit',
    children: [
      {
        path: 'project/:projectId',
        children: [
          {
            path: '',
            component: ProjectEditComponent
          },
          {
            path: 'task/:taskId',
            component: TaskEditComponent
          }
        ]
      }
    ]
  },
  {
    path: 'new',
    children: [
      {
        path: 'project',
        component: ProjectEditComponent
      },
      {
        path: 'project/:projectId',
        children: [
          {
            path: '',
            component: ProjectEditComponent
          },
          {
            path: 'task',
            component: TaskEditComponent
          }
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
