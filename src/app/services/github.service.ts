import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  private URL = 'https://api.github.com/users/Venezia-Dev'


  getGithub() {
    return this.http.get<any>(this.URL);
  }
}
