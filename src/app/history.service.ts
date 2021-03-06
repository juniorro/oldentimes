import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private host = 'https://history.muffinlabs.com/date';
  private MAIL_HOST = 'https://mandrillapp.com/api/1.0/messages/send.json';

  constructor(private http: HttpClient) { }

  public getTodayHistory(): Observable<any> {
    return this.http.request<any>('JSONP', this.host, {
      params: new HttpParams().append('callback', 'JSONP_CALLBACK'),
      observe: 'body',
      responseType: 'json',
    });
  }

  public sendEmail(mail: any): Observable<any> {
    return this.http.post<any>(this.MAIL_HOST, mail);
  }

}
