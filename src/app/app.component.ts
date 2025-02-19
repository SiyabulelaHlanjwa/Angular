import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {BreakpointObserver} from '@angular/cdk/layout';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbarModule, MatSidenavModule, MatButtonModule, MatIconModule, MatDividerModule, MatExpansionModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  @ViewChild(MatSidenav) 
  sidenav!:MatSidenav;

  constructor(private observer: BreakpointObserver){

  }

  ngAfterViewInit(){
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches){
        this.sidenav.mode='over';
        this.sidenav.close();
      }else{
        this.sidenav.open();
      }
    });
  }

  title = 'angular-three';
}
