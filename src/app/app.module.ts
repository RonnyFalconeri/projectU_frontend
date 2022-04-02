import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule } from 'build/openapi/api.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './components/overview/overview.component';
import { TrafficLightComponent } from './components/traffic-light/traffic-light.component';
import { ProjectDetailPageComponent } from './components/project-detail-page/project-detail-page.component';
import { TaskBarComponent } from './components/project-detail-page/task-bar/task-bar.component';
import { ProjectEditComponent } from './components/project-edit/project-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectStatePickerComponent } from './components/project-edit/project-state-picker/project-state-picker.component';
import { ProjectComplexityPickerComponent } from './components/project-edit/project-complexity-picker/project-complexity-picker.component';
import { ProjectTileComponent } from './components/project-tile/project-tile.component';
import { TaskDetailPageComponent } from './components/task-detail-page/task-detail-page.component';
import { TaskProgressComponent } from './components/task-progress/task-progress.component';
import { TaskEditComponent } from './components/task-edit/task-edit.component';
import { TaskStatePickerComponent } from './components/task-edit/task-state-picker/task-state-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    TrafficLightComponent,
    ProjectDetailPageComponent,
    TaskBarComponent,
    ProjectEditComponent,
    ProjectStatePickerComponent,
    ProjectComplexityPickerComponent,
    ProjectTileComponent,
    TaskDetailPageComponent,
    TaskProgressComponent,
    TaskEditComponent,
    TaskStatePickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    ApiModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
