import { Component, Inject, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { ProjectService } from 'src/app/services/project.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css'],
})
export class CreateProjectComponent implements OnInit {
  equipmentForm!: FormGroup;
  actionBtn: string = 'save';
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private api: ProjectService,
    private dialogRef: MatDialogRef<CreateProjectComponent>
  ) {}
  ngOnInit(): void {
    this.equipmentForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      manager: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  addProject() {
    if (this.equipmentForm.valid) {
      this.api.postProject(this.equipmentForm.value).subscribe({
        next: (res) => {
          this.equipmentForm.reset();
          this.dialogRef.close();
          this.router.navigate(['projects', 'members', res.id]);
        },
        error: (error) => {
          alert('error while adding equipment' + error.message);
        },
      });
    }
  }
}
