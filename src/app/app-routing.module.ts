import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { CommunityComponent } from './community/community.component';
import { ComponentsComponent } from './components/components.component';
import { DocsComponent } from './docs/docs.component';
import { EducationComponent } from './education/education.component';
import { EventsComponent } from './events/events.component';
import { FeaturesComponent } from './features/features.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { OverviewComponent } from './overview/overview.component';
import { ResourcesComponent } from './resources/resources.component';
import { SetupComponent } from './setup/setup.component';
import { TemplatesComponent } from './templates/templates.component';
import { WhatisangularComponent } from './whatisangular/whatisangular.component';

const routes: Routes = [
  {path:'',redirectTo:'features',pathMatch:'full'},
  {path:'features',component:FeaturesComponent},
  {path:'docs',component:DocsComponent},
  {path:'events',component:EventsComponent},
  {path:'resources',component:ResourcesComponent},
  {path:'blog',component:BlogComponent},
  {path:'community',component:CommunityComponent},
  {path:'education',component:EducationComponent},
  {path:'introduction',component:IntroductionComponent},
  {path:'whatisangular',component:WhatisangularComponent},
  {path:'setup',component:SetupComponent},
  {path:'overview',component:OverviewComponent},
  {path:'components',component:ComponentsComponent},
  {path:'templates',component:TemplatesComponent},
  {path:'**',component:BlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
