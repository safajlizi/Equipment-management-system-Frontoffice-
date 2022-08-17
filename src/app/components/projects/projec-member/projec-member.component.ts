import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-projec-member',
  templateUrl: './projec-member.component.html',
  styleUrls: ['./projec-member.component.css']
})
export class ProjecMemberComponent implements OnInit {

  listOrAdd: boolean = true;
  projectId!: string;
  constructor(private route: ActivatedRoute) {
    route.params.subscribe((params) => {
      this.projectId = params['id'];
    });
  }

  ngOnInit(): void {}
  switch() {
    this.listOrAdd = !this.listOrAdd;
  }

}
