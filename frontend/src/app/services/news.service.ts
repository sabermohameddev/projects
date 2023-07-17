import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiUrl = 'http://localhost:3000/news';

  constructor(private http: HttpClient) { }

  getNews(): Observable<News[]> {
    return this.http.get<News[]>(this.apiUrl);
  }

  getNewsById(id: number): Observable<News> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<News>(url);
  }

  createNews(news: News): Observable<News> {
    return this.http.post<News>(this.apiUrl, news);
  }

  updateNews(id: number, news: News): Observable<News> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<News>(url, news);
  }

  deleteNews(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  saveNews(news: News): Observable<News> {
    return this.http.post<News>(this.apiUrl, news);
  }

}
