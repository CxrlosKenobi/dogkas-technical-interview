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

  public mapOptions;
  public markerOptions;

  @ViewChild(GoogleMap) map!: GoogleMap;

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
      icon: {
        url: "../../assets/icon/map-red-marker.png",
        scaledSize: {
          width: 40,
          height: 40,
          equals: () => true
        },
      }
    };
  }

  @Input() set pointList(value: IMarker[]) {
    this._pointList = value;
  }

  get pointList(): IMarker[] {
    return this._pointList;
  }

  public panToMarker(coords: google.maps.LatLngLiteral) {
    this.map.panTo(coords);
    console.log("map", this.map)
  }
}
