import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{
  allowNewServer = false; 
  severCreationStatus = "No server was created";
  serverName = "Test Server";

  constructor() {
    setTimeout(() => this.allowNewServer=true, 2000);
  }

  ngOnInit() {

  }

  onCreateServer() {
    this.severCreationStatus = "Server was created! Name is " + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement> event.target).value;
  }

}
