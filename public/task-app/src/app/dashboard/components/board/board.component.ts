import { Component, OnInit, Input, ViewChild, Output, EventEmitter, OnDestroy } from '@angular/core';

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { User, Ticket } from '@app/dashboard/models';

import * as fromServices from '@app/dashboard/services';

/* store */
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { take, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit, OnDestroy {
  userMap: Map<number, User>;
  @Input() users: User[];
  // @Input() tracks;
  tracks;
  updatedTickets: Ticket[] = [];
  // private unsubscribe$ = new Subject<void>();
  @Output() beingDestroyed = new EventEmitter<any>();
  constructor(private localStorageService: fromServices.LocalStorageService,
              private store: Store<fromStore.TaskState>) { }

  ngOnInit() {
    this.fetchUser();
    this.store.select(fromStore.getTicketsByGroup)
      .pipe(
        take(1)
      )
      .subscribe(data => this.tracks = data);
  }

  ngOnDestroy(): void {
    this.beingDestroyed.emit(this.updatedTickets);
    // this.unsubscribe$.next();
    // this.unsubscribe$.complete();
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
    this.localStorageService.storeUpdate(this.updatedTickets);
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
