import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {EventsServicesService} from "../shared/events-services.service";

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {

  eventForm = this.fb.group({
    name: [''],
    id: [''],
    date: [''],
    time: [''],
    price: [''],
    address: [''],
    city: [''],
    country: [''],
    onlineUrl: ['']
  });

  constructor(private fb: FormBuilder, private router: Router, private eventService: EventsServicesService) { }

  ngOnInit() { }

  // cancel() {
  //   this.router.navigate(['/events'])
  // }

  save() {
    this.eventService.save(this.eventForm.value)
  }
}
