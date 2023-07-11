import { User } from "./user.model";

export interface News {
    id: number;
    title: string;
    content: string;
    author: User;
    publishDate: string;
    imageUrl: string;
  }
  