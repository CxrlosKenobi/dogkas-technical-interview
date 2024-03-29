import { Component, inject } from "@angular/core";
import {
  IonApp,
  IonRouterOutlet,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonToolbar,
  IonHeader,
  IonContent,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol, IonList, IonItem, IonAvatar, IonLabel, IonSpinner, IonAlert, IonSkeletonText } from "@ionic/angular/standalone";
//
import { MapsComponent } from "./maps/maps.component";
import { ApiService } from "./api.service";
import type { IService } from "./interfaces";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    IonSkeletonText,
    IonAlert,
    IonSpinner,
    IonLabel,
    IonAvatar,
    IonItem,
    IonList, 
    IonCol,
    IonRow, 
    IonIcon,
    IonButton,
    IonContent,
    IonMenu,
    IonMenuToggle,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonApp,
    IonRouterOutlet,
    MapsComponent,
    IonGrid
  ],
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"]
})
export class AppComponent {
  private apiService = inject(ApiService);
  
  public services: IService[] = [];
  public menuType: string = "push";
  public isLoading = false;
  public error = null;
  public dummyArray = new Array(5);

  public baseimg = "https://play-lh.googleusercontent.com/yPtnkXQAn6yEahOurxuYZL576FDXWn3CqewVcEWJsXlega_nSiavBvmaXwfTGktGlQ"
  
  constructor() {
    this.loadServices();
  }

  loadServices() {
    this.isLoading = true;
    this.apiService
      .getServices()
      .subscribe({
        next: (res: any) => {
          this.services = res;
          this.isLoading = false;
        }
      });
  }
}
