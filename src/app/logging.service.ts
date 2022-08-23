import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  log(logMessage: string){
    console.log(new Date().toLocaleString()+ '::' + logMessage)
  } 
}
