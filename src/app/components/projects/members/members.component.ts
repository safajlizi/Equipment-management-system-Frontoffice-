import { Component, OnInit ,Input} from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  selectedUsers: string[] = [];
  displayedColumns: string[] = ['username','firstname','lastname','email','role','action'];
  dataSource!: MatTableDataSource<any>;
  userSearchForm!: FormGroup;
  shownUsers: any;
  message: string = '';
  cardStyle: string = '';
  id:any
  @Input() projectId!: string;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(    private projectService: ProjectService,
    private api:UserService,private dialog: MatDialog,private _snackBar: MatSnackBar  ,  private userService: UserService,   private tokenStorage: TokenStorageService,
    private router:Router,private route:ActivatedRoute
    ) { }
  getAllUsers() {
    this.api.getUsers().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        this._snackBar.open('error get user','',{ 
          duration: 3000
      });
      },
    });
  }

  onSelect(id: string) {
    if (this.selectedUsers.includes(id)) {
      this.selectedUsers = this.selectedUsers.filter(
        (element) => element != id
      );
      return;
    }
    this.selectedUsers.push(id);

  }
  onSave() {
    this.projectService
      .addProjectMember(this.projectId, this.selectedUsers)
      .subscribe(
        (response) => {
          this._snackBar.open('members added successfuly','',{ 
            duration: 3000
        })
          this.selectedUsers = [];
          this.router.routeReuseStrategy.shouldReuseRoute=()=>false;
          this.router.navigate(['./'],{
            relativeTo: this.route
          })
        },
        (error) => {
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
    return this.selectedUsers.includes(id)
  }
 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
    this.getAllUsers()
    if (this.tokenStorage.getToken()) {
      this.id = this.tokenStorage.getUser().id;
    } else {
      this.router.navigateByUrl('/login');
    }
  }
  
}
