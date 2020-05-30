import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MyServiceService {
  constructor(private httpClient: HttpClient) {}

  greeting$: Observable<string> = this.httpClient
    .get<any>(`${environment.api}/api`)
    .pipe(map((response) => response.message));
}
