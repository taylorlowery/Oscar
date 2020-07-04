import { Injectable } from '@angular/core';
import {Ticket} from './ticket.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  ticketsChanged = new Subject<Ticket[]>();

  private tickets: Ticket[] = [
    new Ticket('1', 'Problem with main page', 'Nothing Loads'),
    new Ticket('2', 'Add users', 'Need the option to create and edit users'),
    new Ticket('3', `Can't close tickets`, 'Need option to close tickets')
  ];
  constructor() { }

  getTickets(): Ticket[] {
    return this.tickets.slice();
  }

  getTicket(index: number): Ticket {
    return this.tickets[index];
  }

  getTicketById(id: string): Ticket{
    return this.tickets.find(t => t.id === id);
  }

  addTicket(ticket: Ticket){
    this.tickets.push(ticket);
    this.triggerTicketsUpdate();
  }

  updateTicket(index: number, ticket: Ticket){
    this.tickets[index] = ticket;
    this.triggerTicketsUpdate();
  }

  deleteTicket(index: number){
    this.tickets.splice(index, 1);
    this.triggerTicketsUpdate();
  }

  triggerTicketsUpdate(){
    this.ticketsChanged.next(this.getTickets());
  }

}
