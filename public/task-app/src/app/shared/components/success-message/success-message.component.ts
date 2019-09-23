import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
/* snackbar */
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
/* icons */
import { faCheck } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-success-message',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './success-message.component.html',
  styleUrls: ['./success-message.component.scss']
})
export class SuccessMessageComponent {
  message: string;
  faCheck = faCheck;

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {
    this.message = data;
  }

}
