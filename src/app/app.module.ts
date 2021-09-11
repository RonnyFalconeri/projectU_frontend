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

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    TrafficLightComponent,
    ProjectDetailPageComponent,
    TaskBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ApiModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
