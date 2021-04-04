import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChefService {

  constructor(private http: HttpClient) { }

  getChefs(data: any) {
    const body = JSON.stringify(data);
    return this.http.post('https://api.dev.chefed.co/chefed/api/v1/cook/filter', body, { headers: { 'content-type': 'application/json' }});
  }
}
