import { User } from "./user.model";

export interface News {
    id: number;
    title: string;
    content: string;
    author: User | null;
    publishDate: string;
    imageUrl: string;
  }
  