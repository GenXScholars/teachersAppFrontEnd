import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BlogComponent } from './components/blog/blog.component';
import { AllSchoolsComponent } from './components/all-schools/all-schools.component';
import { AllTeachersComponent } from './components/all-teachers/all-teachers.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { FindCandidateComponent } from './components/find-candidate/find-candidate.component';
import { PostJobComponent } from './components/post-job/post-job.component';
import { SearchJobComponent } from './components/search-job/search-job.component';
import { SubmitResumeComponent } from './components/submit-resume/submit-resume.component';

const routes: Routes = [
  {path:'', component: HomepageComponent},
  {path:'about', component:AboutUsComponent},
  {path:'blog', component:BlogComponent},
  {path:'allSchools', component: AllSchoolsComponent},
  {path:'allTeachers', component:AllTeachersComponent},
  {path:'*', component:ErrorPageComponent},
  {path:'findCandidate', component:FindCandidateComponent},
  {path:'postJob', component:PostJobComponent},
  {path:'searchJob', component:SearchJobComponent},
  {path:'submitResume', component:SubmitResumeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
