import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-cards',
  templateUrl: './user-cards.component.html',
  styleUrls: ['./user-cards.component.css']
})
export class UserCardsComponent implements OnInit {
  @Input() user;
  constructor() { }

  ngOnInit(): void {
  }

}
