import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {TicketsComponent} from './tickets/tickets.component';
import {TicketDetailComponent} from './tickets/ticket-detail/ticket-detail.component';
import {TicketEditComponent} from './tickets/ticket-edit/ticket-edit.component';
import {NgModule} from '@angular/core';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'tickets', component: TicketsComponent, children: [
      { path: ':id', component: TicketDetailComponent},
      { path: ':id/edit', component: TicketEditComponent}
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule{

}
