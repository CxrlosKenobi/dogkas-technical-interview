import { enableProdMode } from "@angular/core";
import { provideHttpClient } from "@angular/common/http";
import { bootstrapApplication } from "@angular/platform-browser";
import { RouteReuseStrategy, provideRouter, withComponentInputBinding } from "@angular/router";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { IonicRouteStrategy, provideIonicAngular } from "@ionic/angular/standalone";
//
import { routes } from "./app/app.routes";
import { AppComponent } from "./app/app.component";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

function loadGoogleMapsScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${environment.googleMapsApiKey}&callback=initMap`;
    script.defer = true;
    script.async = true;

    (window as any)["initMap"] = () => resolve();
    script.onerror = () => reject("Google Maps script could not be loaded.");
    document.head.appendChild(script);
  });
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withComponentInputBinding()),
    provideAnimationsAsync(),
    provideHttpClient()
  ]
}).then(() => {
  loadGoogleMapsScript().then(() => {
    console.info("Google Maps script loaded successfully.");
  }).catch((error) => {
    console.error(error);
  });
});
