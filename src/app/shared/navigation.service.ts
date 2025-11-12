import { Injectable } from '@angular/core';
import { AppMenu } from './app-menu';
import { AppMenuItem } from './app-menu-item';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { }

  getMenu(): AppMenu{
    return new AppMenu('MainMenu', [
      new AppMenuItem('Sobre mí', '', '' , '/about'),
      new AppMenuItem('Proyectos', '', '' , '/projects'),
      new AppMenuItem('Contacto', '', '' , '/contact'),
    ])
  }
}
