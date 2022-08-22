import { Component, OnInit ,Input} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { UserService } from 'src/app/services/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-project-member-add',
  templateUrl: './project-member-add.component.html',
  styleUrls: ['./project-member-add.component.css']
})
export class ProjectMemberAddComponent implements OnInit {

  @Input() projectId!: string;
  userSearchForm!: FormGroup;
  shownUsers: any;
  selectedUsers: string[] = [];
  message: string = '';
  cardStyle: string = '';
  constructor(
    private userService: UserService,
    private projectService: ProjectService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
    ,private _snackBar: MatSnackBar
  ) {
    route.params.subscribe((params) => {
      this.projectId = params['id'];
    });
  }

  ngOnInit(): void {
    this.userSearchForm = this.formBuilder.group({
      keyword: [''],
    });
  }
  onChange(event: Event) {
    if (!this.userSearchForm.controls['keyword'].value) {
      this.shownUsers = [];
    } else {
      this.userService
        .filter(this.userSearchForm.controls['keyword'].value)
        .subscribe((response) => {
          this.shownUsers = response;
        });
    }
  }
  onSelect(id: string) {
    if (this.selectedUsers.includes(id)) {
      this.selectedUsers = this.selectedUsers.filter(
        (element) => element != id
      );
      return;
    }
    this.selectedUsers.push(id);
    console.log('selected :', this.selectedUsers);
  }
  onSave() {
    this.projectService
      .addProjectMember(this.projectId, this.selectedUsers)
      .subscribe(
        (response) => {
          this.message = 'Successful !';
          this._snackBar.open('members added successfuly','',{ 
            duration: 3000
        })
          this.selectedUsers = [];
        },
        (error) => {
          this.message = 'Unsuccessful ! ';
          this._snackBar.open('member already in the project','',{ 
            duration: 3000
        })
        }
      );
  }
  isIn(id: string) {
    if (this.selectedUsers.includes(id))
      return { style: 'pos selected', bool: true };
    else return { style: 'pos', bool: false };
  }
  isSelected(id:string):boolean
  {    
    console.log('safa'+id)
    return this.selectedUsers.includes(id)
  }
}
