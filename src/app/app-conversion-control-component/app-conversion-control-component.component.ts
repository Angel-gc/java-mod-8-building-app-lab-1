import { Component, OnInit } from '@angular/core';
import { Conversation } from '../converstion.model';
import { Router } from "@angular/router";

@Component({
  selector: 'app-app-conversion-control-component',
  templateUrl: './app-conversion-control-component.component.html',
  styleUrls: ['./app-conversion-control-component.component.css']
})
export class AppConversionControlComponentComponent implements OnInit {

  conversations: Conversation[] = [
    {
      id: 1,
      users: [
        { firstName: "Claire" },
        { firstName: "Ludovic" },
        { firstName: "Jessica" },
      ],
    },
    {
      id: 2,
      users: [{ firstName: "Claire" }, { firstName: "James" }],
    },
    {
      id: 3,
      users: [
        { firstName: "Claire" },
        { firstName: "Aurelie" },
        { firstName: "James" },
        { firstName: "Jessica" },
      ],
    },
  ];

  onNewMessage() {
    this.router.navigate(['contactList']);
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
