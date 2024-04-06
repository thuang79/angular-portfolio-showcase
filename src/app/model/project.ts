import { Category } from './category';

export interface Project {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  url: string | null;
  published_date: string | null;
  image: string | null;
  image2: string | null; 
  image3: string | null;
  githubUrl: string | null;  
  snippets: string[];
  thumb: string | null;
  created_at: string;
  updated_at: string;
  category: Category | null;
  tags: any;
}
