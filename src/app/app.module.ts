import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TicketsComponent } from './tickets/tickets.component';
import { TicketEditComponent } from './tickets/ticket-edit/ticket-edit.component';
import {DropdownDirective} from './shared/Directives/dropdown.directive';
import {RouterModule} from '@angular/router';
import { TicketDetailComponent } from './tickets/ticket-detail/ticket-detail.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    HomeComponent,
    DashboardComponent,
    TicketsComponent,
    TicketEditComponent,
    DropdownDirective,
    TicketDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
