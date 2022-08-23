import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
@Component({
  selector: 'app-project-equipment-add',
  templateUrl: './project-equipment-add.component.html',
  styleUrls: ['./project-equipment-add.component.css']
})
export class ProjectEquipmentAddComponent implements OnInit {


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
  }
  switch() {
    this.listOrAdd = !this.listOrAdd;
  }

}
