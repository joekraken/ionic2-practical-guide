import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reset-buttons',
  templateUrl: './reset-buttons.component.html',
  // styleUrls: ['./reset-buttons.component.css']
})
export class ResetButtonsComponent {
  @Output() resetType = new EventEmitter<string>();

  onReset(msg: string) {
    this.resetType.emit(msg);
  }
}
