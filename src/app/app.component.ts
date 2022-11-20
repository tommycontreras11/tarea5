import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Portada', url: '/portada', icon: 'film' },
    { title: 'Personajes', url: '/personajes', icon: 'people' },
    { title: 'Momentos', url: '/momentos', icon: 'archive' },
    { title: 'Acerca de', url: '/acercade', icon: 'book' },
    { title: 'En mi vida', url: '/vida', icon: 'heart' },
    { title: 'Contrátame', url: '/contratame', icon: 'add' },
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
