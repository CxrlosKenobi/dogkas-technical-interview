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

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withComponentInputBinding()),
    provideAnimationsAsync(),
    provideHttpClient()
  ]
});
