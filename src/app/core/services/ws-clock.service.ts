import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WsClockService {

  public constructor(private socket: Socket) { }

  public receiveEvent(){
    return this.socket.fromEvent('realtime');
  }
}
