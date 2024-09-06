import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.scss']
})
export class ActionButtonsComponent implements OnInit {

  @Output()
  clickEvent: any = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  buttonNewClick() : void {
    this.clickEvent.emit();
  }
}
