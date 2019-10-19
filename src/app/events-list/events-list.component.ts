import {Component, Input, OnInit} from '@angular/core';
import {EventsServicesService} from "../shared/events-services.service";

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})

//@Injectable()
export class EventsListComponent implements OnInit {
  @Input() events:any[];

  constructor(private eventService:EventsServicesService) {
  }

  ngOnInit() {
    this.events = this.eventService.getEvents()
  }


}
