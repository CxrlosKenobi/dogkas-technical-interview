import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/angular/standalone';
//
import { MapsComponent } from './maps/maps.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonToolbar, IonTitle, IonApp, IonRouterOutlet, MapsComponent],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor() {}
}
