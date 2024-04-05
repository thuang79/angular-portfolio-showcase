import { Routes } from '@angular/router';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectComponent } from './components/project/project.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' }, 
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/categories/:slug', component: ProjectsComponent },
  { path: 'projects/:id', component: ProjectComponent },
  { path: '**', redirectTo: '' },
];
