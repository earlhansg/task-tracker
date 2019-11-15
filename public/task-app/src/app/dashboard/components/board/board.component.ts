import { Component, OnInit, Input } from '@angular/core';

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { User, Ticket } from '@app/dashboard/models';

/* store */
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  userMap: Map<number, User>;
  @Input() users: User[];
  tracks;
  updatedTickets: Ticket[] = [];
  constructor(private store: Store<fromStore.TaskState>) { }

  ngOnInit() {
    this.fetchUser();
    this.store.select(fromStore.getTicketsByGroup)
      .pipe(take(1))
      .subscribe(data => this.tracks = data);
  }

  get trackIds(): string[] {
      return this.tracks.map((track: Ticket) => track.id);
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

    this.updatedTickets.forEach((updated: Ticket) => {
      this.store.dispatch(new fromStore.UpdateTicket(updated));
    });
   }

   onTrackDrop(event: CdkDragDrop<[]>) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
   }

   fetchUser() {
    // tslint:disable-next-line:no-string-literal
    const myMap = this.users.map<[number, User]>(user => [user.id, user]);
    this.userMap = new Map<number, User> (myMap);
   }

   updateTicket(columnName, task: Ticket[]) {
    task.forEach((item: Ticket, index ) => {
      const findIndex = this.updatedTickets.findIndex(({ id }) => id === item.id);
      const columnIndex = index;
      if (findIndex < 0 ) {
        this.updatedTickets.push({...item, columnName, columnIndex });
      } else this.updatedTickets[findIndex] = {...item, columnName,  columnIndex};
    });
   }
}
