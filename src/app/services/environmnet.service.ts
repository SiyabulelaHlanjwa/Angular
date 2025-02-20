import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EnvironmnetService {
 private env= environment;
  constructor() { }

  get apiUrl(): string{
    return this.env.apiUrl;

  }

  get isProduction():boolean{
    return this.env.production;
  }
  get debugMode():boolean{
    return this.env.debugMode;
  }
}
