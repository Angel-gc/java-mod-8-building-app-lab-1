import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-app-contact-component',
  templateUrl: './app-contact-component.component.html',
  styleUrls: ['./app-contact-component.component.css']
})
export class AppContactComponentComponent implements OnInit {
  @Input() user:User

  constructor() { }

  ngOnInit(): void {
  }

}
