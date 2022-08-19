import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
@Component({
  selector: 'app-project-equipment-root',
  templateUrl: './project-equipment-root.component.html',
  styleUrls: ['./project-equipment-root.component.css']
})
export class ProjectEquipmentRootComponent implements OnInit {
  IsInaddSpace=false
  location:any
  listOrAdd: boolean = true;
  projectId!: string;
  constructor(private route: ActivatedRoute,private router:Router) {
    route.params.subscribe((params) => {
      this.projectId = params['id'];
    });
  }

  ngOnInit(): void {
    if (this.router.url.includes('/equipment/addequipment')) 
    {
      this.IsInaddSpace=true
    }
    this.location= this.router.url
    console.log(this.location)
  }
  switch() {
    this.listOrAdd = !this.listOrAdd;
  }

}