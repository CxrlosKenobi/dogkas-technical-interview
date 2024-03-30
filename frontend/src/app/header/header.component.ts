import { Component, EventEmitter, Input, Output } from "@angular/core";
import {
  IonToolbar,
  IonContent,
  IonButton,
  IonIcon,
  IonPopover
} from "@ionic/angular/standalone";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [
    IonToolbar,
    IonContent,
    IonButton,
    IonIcon,
    IonPopover
  ],
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  @Input() isLoading: boolean = false;
  @Output() refetchServices = new EventEmitter<void>();

  constructor() {}

  onRefetchClick() {
    this.refetchServices.emit();
  }
}
