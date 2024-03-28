import { Component, OnInit } from "@angular/core";
import { GoogleMap } from "@angular/google-maps";

@Component({
  selector: "app-maps",
  standalone: true,
  imports: [GoogleMap],
  templateUrl: "./maps.component.html",
  styleUrls: ["./maps.component.scss"],
})
export class MapsComponent  implements OnInit {
  public options;

  constructor() {
    this.options = {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    };
  }

  ngOnInit() {
    null;
  }
}
