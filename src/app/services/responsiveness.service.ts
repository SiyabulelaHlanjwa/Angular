import { computed, inject, Injectable } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import {toSignal} from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class ResponsivenessService {
breakPointObs= inject(BreakpointObserver);

//Subsribe 3 breakpoints derived from Media query inside 'Observable'
private readonly smDevice='(width<= 600px)';
private readonly mdDevice='(width>610px and width<1000px)';
private readonly lgDevice= '(width >= 1001px)';

//Return obj containing status of 'T' or 'F' fro the breakpoints,
//Convert the observable to a SIGNAL, dynamically
screenW = toSignal(this.breakPointObs.observe([this.smDevice,this.mdDevice,this.lgDevice]));

//Derive computed for the app to comsume the signals more simply
smallW=computed(()=>this.screenW()?.breakpoints[this.smDevice]);
medW= computed(()=>this.screenW()?.breakpoints[this.mdDevice]);
largW=computed(()=>this.screenW()?.breakpoints[this.lgDevice]);

  constructor() { }
}
