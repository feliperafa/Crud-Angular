import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from './header-date.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _headerDate = new BehaviorSubject<HeaderData>({
    title: 'Início',
    icon: 'home',
    routeUrl: ''
  })

  constructor() { }
  get headerDate(): HeaderData {
    return this._headerDate.value
  }

  set headerDate(headerData: HeaderData){
    this._headerDate.next(headerData)
  }
}
