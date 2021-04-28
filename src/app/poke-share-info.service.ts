import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PokeShareInfoService {

  public stringVar = new Subject<string>();

  constructor() { }

  // Create an observable to watch the subject
  getObservable(): Subject<string>{
    return this.stringVar;
  }

  // Update the subject
  public setValue(newStringVar: string){
    this.stringVar.next(newStringVar);
  }
}
