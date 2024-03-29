import { Component, Input } from "@angular/core";
import { GoogleMap, MapMarker } from "@angular/google-maps";
//
import type { IMarker } from "../interfaces";

@Component({
  selector: "app-maps",
  standalone: true,
  imports: [GoogleMap, MapMarker],
  templateUrl: "./maps.component.html",
  styleUrls: ["./maps.component.scss"],
})
export class MapsComponent {
  private _pointList: IMarker[] = [];

  public mapOptions;
  public markerOptions;

  constructor() {
    this.mapOptions = {
      center: { lat: -15.397, lng: -20.644 },
      zoom: 3,
      mapTypeId: "hybrid",
      mapTypeControlOptions: {
        mapTypeIds: ["roadmap", "satellite", "hybrid", "terrain"],
      },
    };

    this.markerOptions = {
      draggable: false,
      title: "Marker title",
    };
  }

  @Input() set pointList(value: IMarker[]) {
    this._pointList = value;
  }

  get pointList(): IMarker[] {
    return this._pointList;
  }
}
