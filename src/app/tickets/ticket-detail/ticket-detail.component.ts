import { Component, OnInit } from '@angular/core';
import {TicketsService} from '../tickets.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Ticket} from '../ticket.model';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
})
export class TicketDetailComponent implements OnInit {
  ticket: Ticket;
  index: number;

  constructor(private ticketsService: TicketsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.index = +params['id'];
          this.ticket = this.ticketsService.getTicket(this.index);
        }
      );
  }

  onEditTicket(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
