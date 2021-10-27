import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input() list: any;
  @Input() title: any;
  @Output() newItemEvent = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
    console.log('list in child', this.list);
  }
  logoutChild() {
    this.newItemEvent.emit(true);
  }
}
