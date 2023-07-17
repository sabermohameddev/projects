import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/news';
import { User } from 'src/app/models/user.model';
import { NewsService } from 'src/app/services/news.service';
import { DialogService } from 'primeng/dynamicdialog';
import { NewsDetailsComponent } from '../news-details/news-details.component';




@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news: News[] = [];
  loading: boolean = false;
  showModal: boolean = false;
  newNews: News = {
    id: 0,
    title: '',
    content: '',
    author: new User(),
    publishDate: '',
    imageUrl: ''
  };

  constructor(private newsService: NewsService , private dialogService: DialogService) {
    this.showModal = false;
  }

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

  saveNews(): void {
    this.newsService.saveNews(this.newNews).subscribe(
      (savedNews: News) => {
        this.news.push(savedNews);
        this.showModal = false;
        // Reset newNews object
        this.newNews = {
          id: 0,
          title: '',
          content: '',
          author: new User(),
          publishDate: '',
          imageUrl: ''
        };
      },
      (error: any) => {
        console.error('An error occurred while saving news:', error);
        // Handle error if necessary
      }
    );
  }
  deleteNews(article: News): void {
    // Call the deleteNews method in your newsService passing the newsId
    this.newsService.deleteNews(article.id).subscribe(
      () => {
        // Filter out the deleted news from the news array
        this.news = this.news.filter((news: News) => news.id !== article.id);
      },
      (error: any) => {
        console.error('An error occurred while deleting news:', error);
        // Handle error if necessary
      }
    );
  }

  onImageSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      // Read the file using FileReader
      const reader = new FileReader();
      reader.onload = () => {
        // Set the base64-encoded image data to the newNews object
        this.newNews.imageUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  showDetailsModal(article: News): void {
    const ref = this.dialogService.open(NewsDetailsComponent, {
      header: 'News Details',
      width: '500px',
      data: {
        article: article
      }
    });
  }
  
}
