import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news: News[] = [];
  loading: boolean = false;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.loadNews();
  }

  loadNews(): void {
    this.loading = true;
    this.newsService.getNews().subscribe(
      (news: News[]) => {
        this.news = news;
        this.loading = false;
      },
      (error: any) => {
        console.error('An error occurred while fetching news:', error);
        this.loading = false;
      }
    );
  }
}
