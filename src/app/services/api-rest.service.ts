import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiRestService {
  constructor(private http: HttpClient) {}

  async getListCharacter(): Promise<any> {
    try {
      return await this.http.get(`${environment.apiRickAndMorty}/character`).toPromise();
    } catch (error) {
      console.error(error);
    }
  }

  async postExemplo(): Promise<any> {
    try {
      return await this.http
        .post(`${environment.apiJsonPlaceholder}/posts`, { title: 'foo', body: 'bar', userId: 1 })
        .toPromise();
    } catch (e) {}
  }
}
