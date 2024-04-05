import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProjectsComponent } from './projects/projects.component';
import { CategoriesComponent } from './categories/categories.component';
import { TagsComponent } from './tags/tags.component';

import { Project } from './model/project';
import { Category } from './model/category';
import { Tag } from './model/tag';

import { PortfolioFilterPipe } from './pipes/portfolio-filter.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    CommonModule, 
    PortfolioFilterPipe,
    ProjectsComponent,
    CategoriesComponent,
    TagsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

// App component class
export class AppComponent {
  title = "Tracy's Showcase";
  date = new Date();
  author = 'Tracy Huang';
  
  categoryFilter: Category | undefined;
  tagFilter: Tag | undefined;

  setCategoryFilter(category: Category) {
    this.categoryFilter = category;
  }

  setTagFilter(tag: Tag) {
    this.tagFilter = tag;
  }

  clearFilters() {
    this.categoryFilter = undefined;
    this.tagFilter = undefined;
  }
}
