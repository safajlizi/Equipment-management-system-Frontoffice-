import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  form:FormGroup;
  constructor(private router: Router,private fb:FormBuilder) { 
    this.form=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }
  ingresar() {

this.router.navigateByUrl('/dashboard')

  }


}
