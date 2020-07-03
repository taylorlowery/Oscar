import {Component, OnDestroy, OnInit} from '@angular/core';
import {TicketsService} from '../tickets.service';
import {Ticket} from '../ticket.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.css']
})
export class TicketsListComponent implements OnInit, OnDestroy {
  tickets: Ticket[];
  subscription: Subscription;
  constructor(private ticketsService: TicketsService) { }

  ngOnInit(): void {
    this.subscription = this.ticketsService.ticketsChanged
      .subscribe((tickets: Ticket[]) => {
        this.tickets = tickets;
      });
    this.tickets = this.ticketsService.getTickets();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
