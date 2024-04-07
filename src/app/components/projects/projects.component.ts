import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Category } from '../../model/category';
import { Tag } from '../../model/tag';

import { PortfolioFilterPipe } from '../../pipes/portfolio-filter.pipe';

import { ProjectService } from '../../services/project.service';
import { Project } from '../../model/project';

import { ProjectComponent } from '../project/project.component';
import { ActivatedRoute } from '@angular/router';

import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, PortfolioFilterPipe, ProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) {}

  projects: Project[] = [];
  getProjects(): void {
    this.projectService
      .getProjects()
      .subscribe((projects) => (this.projects = projects));
  }

  getProjectsByCategory(): void {
    const categorySlug = String(this.route.snapshot.paramMap.get('slug'));
    this.projectService
      .getProjectsByCategory(categorySlug)
      .subscribe((data) => (this.projects = data));
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const segment: string = this.route.snapshot.url[1]?.path;
      if (segment === 'categories') {
        this.isCategoryPage = true;
        this.getProjectsByCategory();
      } else {
        this.isCategoryPage = false;
        this.getProjects();
      }
    });
  }
  

  @Input() categoryFilter: Category | undefined;
  @Output() newCategoryFilterEvent = new EventEmitter<Category>();
  @Input() tagFilter: Tag | undefined;
  @Output() newTagFilterEvent = new EventEmitter<Tag>();

  setCategoryFilter(category: Category) {
    this.categoryFilter = category;
    this.newCategoryFilterEvent.emit(category);
  }

  setTagFilter(tag: Tag) {
    this.tagFilter = tag;
    this.newTagFilterEvent.emit(tag);
  }

  clearFilters() {
    this.categoryFilter = undefined;
    this.tagFilter = undefined;
  }

  selectedProject?: Project;

  @Output() newSelectedProjectEvent = new EventEmitter<Project>();

  setSelectedProject(project: Project): void {
    this.newSelectedProjectEvent.emit(project);
  }

  isCategoryPage: boolean = false;

}
