import { Component, computed, inject, OnInit, ViewChild } from '@angular/core';
import { EnvironmnetService } from './services/environmnet.service';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
//import {BreakpointObserver} from '@angular/cdk/layout';
import { ResponsivenessService } from './services/responsiveness.service';

@Component({
  selector: 'app-root',
  imports: [
     MatToolbarModule, 
     MatSidenavModule,
     MatButtonModule,
     MatIconModule, 
     MatDividerModule,
     MatExpansionModule
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  responsive= inject(ResponsivenessService);
  apiUrl: string='';

  @ViewChild(MatSidenav) 
  sidenav!:MatSidenav;

  constructor(private envService: EnvironmnetService){}
 
  ngOnInit():void{
  this.apiUrl=this.envService.apiUrl;
  console.log('API URL: ',this.apiUrl);
  console.log("In Production mode", this.envService.isProduction)
 }
 
 menuSelectorMode =computed(()=>{
  if(this.responsive.largW()){
    return 'side';
  }
  return 'over';
 })

  title = 'angular-three';
}
