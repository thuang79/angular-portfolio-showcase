import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';

import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectComponent } from './components/project/project.component';

import { CategoriesComponent } from './components/categories/categories.component';
import { TagsComponent } from './components/tags/tags.component';

import { Category } from './model/category';
import { Tag } from './model/tag';
import { Project } from './model/project';

import { PortfolioFilterPipe } from './pipes/portfolio-filter.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    RouterLink,
    RouterLinkActive,
    PortfolioFilterPipe,
    ProjectsComponent,
    ProjectComponent,
    CategoriesComponent,
    TagsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

// App component class
export class AppComponent {
  title = "TH PORTFOLIO";
  date = new Date();
  author = 'Tracy Huang';
  
  categoryFilter: Category | undefined;
  tagFilter: Tag | undefined;

  constructor(public router: Router) {}

  setCategoryFilter(category: Category) {
    this.categoryFilter = category;
    this.tagFilter = undefined;
  }

  setTagFilter(tag: Tag) {
    this.tagFilter = tag;
    this.categoryFilter = undefined;
  }

  clearFilters() {
    this.categoryFilter = undefined;
    this.tagFilter = undefined;
  }

  selectedProject?: Project;

  setSelectedProject(project: Project) {
    this.selectedProject = project;
  }

  clearSelectedProject() {
    this.selectedProject = undefined;
  }
}
