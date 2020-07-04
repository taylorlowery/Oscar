import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onNewTicket(){
    this.router.navigate(['/tickets', 'new']);
  }

}
