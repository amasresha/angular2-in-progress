import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {
allowNewServer=false;
  constructor() {
    setTimeout(()=>{
     this.allowNewServer=true;
    },2000);
   }
  ngOnInit() {
  }
  servers =['Test-Server', 'Dev-Server', 'Production-Server'];
  serverCreated =false;
  serverName = 'TestServer';
  serverCreationStatus = 'No server created';

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "server was created! Name is " + this.serverName;

  }

}
