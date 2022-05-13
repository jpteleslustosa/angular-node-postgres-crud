import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../../service/user.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private userService: UserService
    ) { 
      this.userForm = this.formBuilder.group({
        name: [''],
        email: [''],
      })
    }

  ngOnInit(): void {
  }

  onSubmit(): any {
    console.log("ejtre9")
    this.userService.AddUser(this.userForm.value).subscribe(() => {
        console.log('User added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/users-list'))
      }, (err) => {
        console.log(err);
    });
  }

}
