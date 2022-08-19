import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';


@Component({
  selector: 'app-project-members-root',
  templateUrl: './project-members-root.component.html',
  styleUrls: ['./project-members-root.component.css']
})
export class ProjectMembersRootComponent implements OnInit {
  location:any
  listOrAdd: boolean = true;
  projectId!: string;
  constructor(private route: ActivatedRoute,private router:Router) {
    route.params.subscribe((params) => {
      this.projectId = params['id'];
    });
  }

  ngOnInit(): void {
    this.location= this.router.url
    console.log(this.location)
  }
  switch() {
    this.listOrAdd = !this.listOrAdd;
  }
  isSomePage() {
    if (this.router.url.includes('/my-page-path/')) {
        return 'active';
    } else {
        return '';
    }
 }

}
