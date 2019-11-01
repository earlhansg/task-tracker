import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { User, Ticket } from '@app/dashboard/models';

import * as fromServices from '@app/dashboard/services';

import { Column } from '@app/dashboard/enums/column.enum';

/* store */
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  userMap: Map<number, User>;
  @Input() users: User[];
  @Input() tracks;
  updatedTickets = [];
  // @Output() beingDestroyed = new EventEmitter<any>();
  constructor(private store: Store<fromStore.TaskState>,
              private ticketService: fromServices.TicketsService) { }

  ngOnInit() {
    this.fetchUser();
  }

  get trackIds(): string[] {
      return this.tracks.map(track => track.id);
  }

  onTalkDrop(event: CdkDragDrop<[]>, title, task: []) {

    if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
        transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    this.updateTicket(title, task);
   }

   onTrackDrop(event: CdkDragDrop<[]>) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
   }

   fetchUser() {
    // tslint:disable-next-line:no-string-literal
    const myMap = this.users.map<[number, User]>(user => [user.id, user]);
    this.userMap = new Map<number, User> (myMap);
   }

   updateTicket(columnName, task) {
    task.forEach((item: Ticket) => {
      const findIndex = this.updatedTickets.findIndex(({ id }) => id === item.id);
      if (findIndex < 0 ) {
        this.updatedTickets.push({...item, columnName });
      } else this.updatedTickets[findIndex] = {...item, columnName};
    });
    console.log('output', this.updatedTickets);
   }
}
