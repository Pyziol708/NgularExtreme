import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '@core/interfaces';
import { Observable } from 'rxjs';

@Injectable()
export class TaskService {
  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('/tasks');
  }
}
