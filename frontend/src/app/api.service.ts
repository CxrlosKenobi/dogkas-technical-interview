import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const API_URL = "http://localhost:3000";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private http = inject(HttpClient);

  constructor() { }

  getServices() {
    return this.http.get(`${API_URL}/services`);
  }
}
