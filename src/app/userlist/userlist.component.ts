import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  username: string;
  users: Array<any>;
  exist: boolean;
  constructor(private _githubService: GithubService) { }

  ngOnInit() {
    this.exist = false;
  }

  getAllUser(user: string){
    user = this.username;
    this._githubService.get(user).subscribe( (
      data:any[]) => {
        this.users =data;
        this.exist = true;
        console.log(this.users);
      },
      (err) => {
        console.log(err)
      }),
      () =>{}
  }

}
