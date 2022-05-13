import { Component, OnInit } from '@angular/core';
import { UserService } from './../../service/user.service';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  Users:any = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.GetUsers().subscribe(res => {
      console.log(res)
      this.Users =res;
    });    

  }
  delete(id:any, i:any) {
    console.log(id);
    if(window.confirm('Tem certeza que deseja continuar?')) {
      this.userService.deleteUser(id).subscribe((res) => {
        this.Users.splice(i, 1);
      })
    }
  }


}
