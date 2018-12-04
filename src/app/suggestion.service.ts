import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SuggestionService {
  constructor(private httpClient: HttpClient) {}

  sendSuggestion(data) {
    return this.httpClient.post(
      `${environment.api}/suggestions/create`,
      data
    );
  }
}
