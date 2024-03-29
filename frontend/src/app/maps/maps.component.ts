import { Component, Input, ViewChild } from "@angular/core";
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
  private chosenServiceId: number | null = null;

  public mapOptions;

  @ViewChild(GoogleMap, { static: false }) map!: GoogleMap;

  constructor() {
    this.mapOptions = {
      center: { lat: -15.397, lng: -20.644 },
      zoom: 3,
      mapTypeId: "hybrid",
      mapTypeControlOptions: {
        mapTypeIds: ["roadmap", "satellite", "hybrid", "terrain"],
      },
    };
  }

  @Input() set pointList(value: IMarker[]) {
    this._pointList = value;
  }

  handleMarkerOptions(marker: IMarker) {
    return {
      draggable: false,
      label: {
        text: marker.id.toString(),
        color: (marker.id === this.chosenServiceId) ? "white" : "black",
        fontWeight: "bold",
        fontSize: "14px",
      },
    }
  }

  get pointList(): IMarker[] {
    return this._pointList;
  }

  public panToMarker(coords: google.maps.LatLngLiteral, chosenServiceId: number) {
    this.chosenServiceId = chosenServiceId;
    this.map.panTo(coords);
  }
}
