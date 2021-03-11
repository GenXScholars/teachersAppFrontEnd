import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

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
import { SliderComponent } from './components/slider/slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { PrivacyComponent } from './components/privacy/privacy.component';


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
    SubmitResumeComponent,
    SliderComponent,
    PrivacyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TeachersProfileModule,
    BrowserAnimationsModule,
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private spinner: NgxSpinnerService) {}

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
  }
}
