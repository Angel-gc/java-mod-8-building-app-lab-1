// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-app-contact-list-component',
//   templateUrl: './app-contact-list-component.component.html',
//   styleUrls: ['./app-contact-list-component.component.css']
// })
// export class AppContactListComponentComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from "@angular/core";
import { User } from "../user.model";

@Component({
  selector: 'app-app-contact-list-component',
  templateUrl: './app-contact-list-component.component.html',
  styleUrls: ['./app-contact-list-component.component.css']
})
export class AppContactListComponentComponent implements OnInit {
  users: User[] = [
    { firstName: "Aurelie" },
    { firstName: "James" },
    { firstName: "Jessica" },
    { firstName: "Ludovic" },
    { firstName: "Maria" },
  ];

  constructor() {
    console.log('displaying all users')
    this.users.map((user:User) => console.log(user.firstName))
  }

  ngOnInit(): void {}
}
