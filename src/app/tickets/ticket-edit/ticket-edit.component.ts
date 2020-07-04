import { Component, OnInit } from '@angular/core';
import {TicketsService} from '../tickets.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-ticket-edit',
  templateUrl: './ticket-edit.component.html',
  styleUrls: ['./ticket-edit.component.css']
})
export class TicketEditComponent implements OnInit {
  editMode = false;
  id: number;
  ticketForm: FormGroup;
  constructor(private ticketsService: TicketsService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
      .subscribe((params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      });
  }

  private initForm(){
    let ticketSubject = '';
    let ticketDescription = '';
    let ticketId = '';
    if (this.editMode){
      const ticket = this.ticketsService.getTicket(this.id);
      ticketSubject = ticket.subject;
      ticketDescription = ticket.description;
      ticketId = ticket.id;
    }
    this.ticketForm = new FormGroup({
      'id': new FormControl(ticketId),
      'subject': new FormControl(ticketSubject, Validators.required),
      'description': new FormControl(ticketDescription, Validators.required)
    });
  }

  onSubmit(){
    if (this.editMode){
      this.ticketsService.updateTicket(this.id, this.ticketForm.value);
    }
    else {
      this.ticketsService.addTicket(this.ticketForm.value);
    }
    this.onClear();
  }

  onClear(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
