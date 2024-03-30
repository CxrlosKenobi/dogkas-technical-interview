import { Component, inject, ViewChild } from "@angular/core";
import {
  IonApp,
  IonRouterOutlet,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonHeader,
  IonContent,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol, IonList, IonItem, IonAvatar, IonLabel, IonSpinner, IonAlert, IonSkeletonText, IonPopover, IonChip } from "@ionic/angular/standalone";
//
import { HeaderComponent } from "./header/header.component";
import { MapsComponent } from "./maps/maps.component";
import { ApiService } from "./api.service";
import type { IService, IMarker } from "./interfaces";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    HeaderComponent,
    IonChip,
    IonPopover,
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

  public chosenServiceId: number | null = null;
  public pointList: IMarker[] = [];
  public menuType: string = "push";
  public isLoading = false;
  public error = null;
  public dummyArray = new Array(7);
  public baseImg = "https://dummyimage.com/500x500/000/fff&text=";

  @ViewChild(MapsComponent) mapComponent!: MapsComponent;

  constructor() {
    this.loadServices();
  }

  constructPointList(services: IService[]) {
    return services.map((service) => ({
      id: service.id,
      position: {
        lat: parseFloat(service.latitude),
        lng: parseFloat(service.longitude),
      }
    }));
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
          this.chosenServiceId = null;
          this.isLoading = false;
        }
      })
  }

  flyToMarker(service: IService) {
    const coords = {
      lat: parseFloat(service.latitude),
      lng: parseFloat(service.longitude)
    };
    this.chosenServiceId = service.id;
    this.mapComponent.panToMarker(coords, service.id);
  }
}
