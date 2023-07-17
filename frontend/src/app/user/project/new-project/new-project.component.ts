import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {
  projectName!: string;
  projectDescription!: string;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) { }

  ngOnInit(): void {
  }

  saveProject(): void {
   
    console.log('Project Name:', this.projectName);
    console.log('Project Description:', this.projectDescription);

 
    this.ref.close({ projectName: this.projectName, projectDescription: this.projectDescription });
  }

  cancel(): void {
    
    this.ref.close();
  }

}
