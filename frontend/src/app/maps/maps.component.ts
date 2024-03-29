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

  public options;
  public markerOptions = { draggable: false }
  markerPositions: google.maps.LatLngLiteral[] = [];

  constructor() {
    this.options = {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    };
  }

  @Input() set pointList(value: IMarker[]) {
    this._pointList = value;
    console.log("pointList", this._pointList);
  }

  get pointList(): IMarker[] {
    return this._pointList;
  }
}
