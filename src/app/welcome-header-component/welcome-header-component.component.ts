import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-welcome-header-component',
  templateUrl: './welcome-header-component.component.html',
  styleUrls: ['./welcome-header-component.component.css']
})
export class WelcomeHeaderComponentComponent implements OnInit {

  activeUser: User = {
    firstName: "Maria",
  };

  constructor() { }

  ngOnInit(): void {
  }

}
