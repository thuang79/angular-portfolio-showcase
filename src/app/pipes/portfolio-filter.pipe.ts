import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../model/project';
import { Tag } from '../model/tag';

@Pipe({
  name: 'portfolioFilterPipe',
  standalone: true,
})
export class PortfolioFilterPipe implements PipeTransform {
  transform(projects: Project[], tag: Tag | undefined): Project[] {
    let filteredFigs = [];
    if (tag) {
      filteredFigs = projects.filter((project) => {
        return JSON.stringify(project.tags).indexOf(JSON.stringify(tag)) + 1;
      });
    } else {
      filteredFigs = projects;
    }
    return filteredFigs;
  }
}
