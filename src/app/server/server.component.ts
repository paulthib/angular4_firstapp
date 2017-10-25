import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})

export class ServerComponent {
  serverId = 10;
  serverStatus = "offline_XXX";

  constructor() {
      console.log( Math.random());
      this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  };
  getColor(){
    return serverStatus === 'online' ? 'green' : 'red';
  }
}
