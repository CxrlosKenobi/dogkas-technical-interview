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
import type { IService, IMarker } from "./interfaces";

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
  
  protected services: IService[] = [];
  
  public pointList: IMarker[] = [];
  public menuType: string = "push";
  public isLoading = false;
  public error = null;
  public dummyArray = new Array(6);
  public baseimg = "https://play-lh.googleusercontent.com/yPtnkXQAn6yEahOurxuYZL576FDXWn3CqewVcEWJsXlega_nSiavBvmaXwfTGktGlQ"
  
  constructor() {
    this.loadServices();
  }

  constructPointList(services: IService[]) {
    return services.map((service) => {
      return {
        lat: parseFloat(service.latitude),
        lng: parseFloat(service.longitude)
      };
    });

  }

  loadServices() {
    this.isLoading = true;
    this.apiService
      .getServices()
      .subscribe({
        next: (res: any) => {
          this.services = res;
          this.pointList = this.constructPointList(this.services);
          this.isLoading = false;
        }
      });
  }

  populateAndLoadServices() {
    this.isLoading = true;
    this.apiService
      .populateAndGetServices()
      .subscribe({
        next: (res: any) => {
          this.services = res;
          this.pointList = this.constructPointList(this.services);
          this.isLoading = false;
        }
      })
  }
}
