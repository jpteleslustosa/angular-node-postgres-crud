
import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './../../service/user.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {
  
  getId: any;
  updateForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: UserService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    this.crudService.GetUser(this.getId).subscribe(res => {

      if(res.length == 1){
        res = res[0];
      }

      this.updateForm.setValue({
        name: res['name'],
        email: res['email'],
      });
    });
    this.updateForm = this.formBuilder.group({
      name: [''],
      email: [''],
    })
   }

  ngOnInit(): void {
  }

  onUpdate(): any {
    this.crudService.updateUser(this.getId, this.updateForm.value)
    .subscribe(() => {
        console.log('User updated successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/users-list'))
      }, (err) => {
        console.log(err);
    });
  }

}
