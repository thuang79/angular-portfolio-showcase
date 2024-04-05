import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Category } from '../model/category';
import { Tag } from '../model/tag';

import { PortfolioFilterPipe } from '../pipes/portfolio-filter.pipe';

/*
// now handled by service
import { MINIFIGS } from '../data/minifigs';
*/
import { ProjectService } from '../services/project.service';
import { Project } from '../model/project';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, PortfolioFilterPipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  constructor(private projectService: ProjectService) {}
  projects: Project[] = [];
  getProjects(): void {
    this.projects = this.projectService.getProjects();
  }

  ngOnInit(): void {
    this.getProjects();
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
}