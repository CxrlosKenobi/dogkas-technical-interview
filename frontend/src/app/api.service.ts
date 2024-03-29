import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { delay } from "rxjs/operators";

const API_URL = "http://localhost:3000";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private http = inject(HttpClient);

  constructor() { }

  getServices() {
    return this.http
      .get(`${API_URL}/services`)
      .pipe(delay(400)); // simulates network latency for skeleton loading
  }
}
