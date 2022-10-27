import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private api_url = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(this.api_url);
  }
  addUser(userObj: any) {
    return this.http.post(this.api_url, userObj);
  }
  deleteUser(id: any) {
    return this.http.delete(`${this.api_url}/${id}`);
  }
}
