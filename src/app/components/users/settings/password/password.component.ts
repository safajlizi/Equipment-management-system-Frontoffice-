import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  hide = true;

  constructor(fb: FormBuilder) {

  }

  ngOnInit(): void {
  }

  save(){
  
  }
}
