import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html'
})
export class NotFoundComponent implements OnInit {

  @Input() title = 'Nothing here!';
  @Input() message = 'Visit after sometime';

  constructor() { }

  ngOnInit() { }

}
