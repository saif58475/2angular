import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DocsComponent } from './docs/docs.component';
import { FeaturesComponent } from './features/features.component';
import { ResourcesComponent } from './resources/resources.component';
import { EventsComponent } from './events/events.component';
import { BlogComponent } from './blog/blog.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { EducationComponent } from './education/education.component';
import { CommunityComponent } from './community/community.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { WhatisangularComponent } from './whatisangular/whatisangular.component';
import { SetupComponent } from './setup/setup.component';
import { OverviewComponent } from './overview/overview.component';
import { ComponentsComponent } from './components/components.component';
import { TemplatesComponent } from './templates/templates.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DocsComponent,
    FeaturesComponent,
    ResourcesComponent,
    EventsComponent,
    BlogComponent,
    NavbarComponent,
    FooterComponent,
    EducationComponent,
    CommunityComponent,
    IntroductionComponent,
    WhatisangularComponent,
    SetupComponent,
    OverviewComponent,
    ComponentsComponent,
    TemplatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
