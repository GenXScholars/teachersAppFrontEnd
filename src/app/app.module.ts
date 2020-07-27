import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeachersProfileModule } from './teachers-profile/teachers-profile.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { AllSchoolsComponent } from './components/all-schools/all-schools.component';
import { AllTeachersComponent } from './components/all-teachers/all-teachers.component'

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutUsComponent,
    ErrorPageComponent,
    AllSchoolsComponent,
    AllTeachersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TeachersProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
