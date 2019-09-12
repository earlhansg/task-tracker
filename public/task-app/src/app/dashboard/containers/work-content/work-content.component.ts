import { Component, ViewChildren, QueryList, OnInit, OnDestroy, TemplateRef, ViewChild } from '@angular/core';
/* components  */
import { ColumnComponent } from '@app/dashboard/components/column/column.component';
import { CreateTicketFormComponent } from '@app/dashboard/components/create-ticket-form/create-ticket-form.component';
import { DialogComponent } from '@app/shared/components/dialog/dialog.component';
import { SuccessMessageComponent } from '@app/shared/components/success-message/success-message.component';
/* interface */
import { Ticket } from '@app/dashboard/models';
/* enum */
import { Column } from '@app/dashboard/enums/column.enum';
/* mock data */
import { tickets } from '@app/dashboard/containers/work-content/work.data';
/* icons */
import { faPlus, faStickyNote } from '@fortawesome/free-solid-svg-icons';
/* dialog */
import { MatDialog } from '@angular/material/dialog';
/* snackbar */
import { MatSnackBar } from '@angular/material/snack-bar';
/* service */
import { FormService } from '@app/shared/services';
/* rxjs */
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-work-content',
  templateUrl: './work-content.component.html',
  styleUrls: ['./work-content.component.scss']
})
export class WorkContentComponent implements OnInit, OnDestroy {
  faPlus = faPlus;
  column: ColumnComponent;
  @ViewChildren(ColumnComponent) columns: QueryList<ColumnComponent>;

  mockData: Ticket[] = tickets;
  subscription: Subscription;

  header = 'Create Ticket';
  icon = faStickyNote;
  @ViewChild('createTicketForm', {static: false}) createTicketFormTemplate: TemplateRef<CreateTicketFormComponent>;


  constructor(public dialog: MatDialog,
              private snackBar: MatSnackBar,
              private formService: FormService) { }

  ngOnInit() {
    this.subscription = this.formService.getValues().subscribe(values => {
      const created      = '08/09/17';
      const columnName   = Column.Backlog;
      const ticketStatus = values ? !!Object.keys(values.formValues).length : false;
      if (ticketStatus) {
        const item: Ticket = {...values.formValues, created, columnName };
        this.addTask(item);
      }
    });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '350px',
      data: { header: this.header, icon: this.icon, template: this.createTicketFormTemplate }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.formService.clearValues();
    });
  }


  addTask(item: Ticket) {
    this.columns
        .forEach((val) => val.columnName === item.columnName
        ? val.createTask(item) : null);
    this.snackBar.openFromComponent(SuccessMessageComponent, {
      data: `${item.name} ticket added`,
      duration: 2500
    });
  }

}
