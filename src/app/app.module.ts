import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeachersProfileModule } from './teachers-profile/teachers-profile.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { AllSchoolsComponent } from './components/all-schools/all-schools.component';
import { AllTeachersComponent } from './components/all-teachers/all-teachers.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BlogComponent } from './components/blog/blog.component';
import { FindCandidateComponent } from './components/find-candidate/find-candidate.component';
import { PostJobComponent } from './components/post-job/post-job.component';
import { SearchJobComponent } from './components/search-job/search-job.component';
import { SubmitResumeComponent } from './components/submit-resume/submit-resume.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutUsComponent,
    ErrorPageComponent,
    AllSchoolsComponent,
    AllTeachersComponent,
    HeaderComponent,
    FooterComponent,
    BlogComponent,
    FindCandidateComponent,
    PostJobComponent,
    SearchJobComponent,
    SubmitResumeComponent
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
