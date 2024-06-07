import { HttpClient, HttpHeaders} from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';

export abstract class BaseService {

  http = inject(HttpClient) as HttpClient;

  private httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    }),
};

  private buildURL(actionurl: string): string {
    return `${environment.baseEndPoint}/${actionurl}`;
  }

  protected get<T>(actionUrl: string): Observable<T> {
    return this.http
      .get<T>(this.buildURL(actionUrl),this.httpOptions)
      .pipe(map((response) => (response)), catchError(this.handleServerError));
  }

  private handleServerError(error: Response) {
    return throwError(() => error);
  }
}
