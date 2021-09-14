import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    TrafficLightComponent,
    ProjectDetailPageComponent,
    TaskBarComponent,
    ProjectEditComponent,
    ProjectStatePickerComponent,
    ProjectComplexityPickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
