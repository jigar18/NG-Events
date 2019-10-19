import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {EventsListComponent} from "./events-list/events-list.component";
import {EventCreateComponent} from "./event-create/event-create.component";

const routes: Routes = [
  { path: 'events', component: EventsListComponent },
  //{ path: 'events/:id', component: Event}
  { path: 'new', component: EventCreateComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
