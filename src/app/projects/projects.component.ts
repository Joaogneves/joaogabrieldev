import { Component, OnInit } from '@angular/core';
import { Service } from '../service/service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit{

  projects$ = new Observable<any[]>();

  ngOnInit(): void {
    this.getProjects();
  }

  constructor(private service: Service) {}

  getProjects() {
    this.projects$ = this.service.getProjects();
  }

}
