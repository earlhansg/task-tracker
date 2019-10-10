import { Component, ViewChildren, QueryList, OnInit, AfterViewInit,
         OnDestroy, TemplateRef, ViewChild } from '@angular/core';
/* components  */
import * as dashboardComponent from '@app/dashboard/components';
import * as sharedComponent from '@app/shared/components';
/* interface */
import { Ticket, User } from '@app/dashboard/models';
/* enum */
import { Column } from '@app/dashboard/enums/column.enum';
/* icons */
import { faPlus, faStickyNote } from '@fortawesome/free-solid-svg-icons';
/* dialog */
import { MatDialog } from '@angular/material/dialog';
/* snackbar */
import { MatSnackBar } from '@angular/material/snack-bar';
/* service */
import { FormService } from '@app/shared/services';
/* rxjs */
import { Subscription, Observable } from 'rxjs';
/* store */
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';

@Component({
  selector: 'app-work-content',
  templateUrl: './work-content.component.html',
  styleUrls: ['./work-content.component.scss']
})
export class WorkContentComponent implements OnInit, OnDestroy, AfterViewInit {
  faPlus = faPlus;
  column: dashboardComponent.ColumnComponent;

  @ViewChildren(dashboardComponent.ColumnComponent)
  columns: QueryList<dashboardComponent.ColumnComponent>;

  mockData: Ticket[];
  subscription: Subscription;

  header = 'Create Ticket';
  icon = faStickyNote;
  @ViewChild('createTicketForm', {static: false})
  createTicketFormTemplate: TemplateRef<dashboardComponent.CreateTicketFormComponent>;

  tickets$: Observable<Ticket[]>;
  users$: Observable<User[]>;

  constructor(public dialog: MatDialog,
              private snackBar: MatSnackBar,
              private formService: FormService,
              private store: Store<fromStore.TaskState>) {}

  ngOnInit() {
    this.tickets$ = this.store.select(fromStore.getAllTickets);
    this.users$ = this.store.select(fromStore.getAllUsers);
    this.createTicketfromDialog();
  }

  ngAfterViewInit() {
    this.columns.forEach((item) => {
      item.updated.subscribe(data => {
        // this.store.dispatch(new fromStore.CreateTicket(data));
        this.store.dispatch(new fromStore.UpdateTicket(data));
        this.addTicket(data, 'updateTicket');
      });
    });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
    this.columns.forEach((item) => {
      item.updated.unsubscribe();
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(sharedComponent.DialogComponent, {
      width: '350px',
      data: { header: this.header, icon: this.icon, template: this.createTicketFormTemplate }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.formService.clearValues();
    });
  }

  createTicketfromDialog() {
    this.subscription = this.formService.getValues().subscribe(values => {
      const date         = new Date();
      const created      = JSON.stringify(date);
      const updated      = JSON.stringify(date);
      const columnName   = Column.Backlog;
      const ticketStatus = values ? !!Object.keys(values.formValues).length : false;
      if (ticketStatus) {
        const item: Ticket = {...values.formValues, created, columnName, updated };
        this.store.dispatch(new fromStore.CreateTicket(item));
        this.addTicket(item, 'addTicket');
      }
    });
  }

  addTicket(item: Ticket, type: 'addTicket'| 'updateTicket') {
    this.columns
        .forEach((val) => val.columnName === item.columnName
        ? val.createTicket(item) : null);
    const message = type === 'addTicket' ? 'added' : 'updated';
    this.snackBar.openFromComponent(sharedComponent.SuccessMessageComponent, {
      data: `${item.name} ticket ${message}`,
      duration: 2500
    });
  }

}
