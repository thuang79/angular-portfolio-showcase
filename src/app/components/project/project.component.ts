import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ProjectService } from '../../services/project.service';
import { Project } from '../../model/project';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private location: Location
  ) {}
  // Minifig will be passed in from the parent component, optional
  // @Input() minifig?: Minifig;
  project!: Project;
  ngOnInit(): void {
    this.getProject();
  }
  getProject(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.project = this.projectService.getProject(id);
  }

  goBack(): void {
    this.location.back();
  }
  
  currentImageIndex: number = 0;

  changeImage(step: number): void {
    this.currentImageIndex += step;
    if (this.currentImageIndex >= this.project.images.length) {
      this.currentImageIndex = 0;
    } else if (this.currentImageIndex < 0) {
      this.currentImageIndex = this.project.images.length - 1;
    }
  }
}
