import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { ProjectDetailPageComponent } from './components/project-detail-page/project-detail-page.component';

const routes: Routes = [
  {path: '', component: OverviewComponent},
  {path: 'project/:id', component: ProjectDetailPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
