import { Component, OnInit } from '@angular/core';
import {Repo} from '../repo';
import { SearchServiveService } from '../search-servive.service';
import {Users} from '../users';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
    providers: [SearchServiveService],
  styleUrls: ['./users.component.css']
})

export class UserComponent implements OnInit {
  
    public searchMe = 'Brian-nyabuto12';
    public githubUser: string;

    users: Users ;
    repo: Repo;
    public searchRepo: string;
    public resultCount = 12;


    findUser(username) {
        this.githubUser = '';
        this.searchMe  = username;
        this.ngOnInit();
    }


  constructor(public githubUserRequest: SearchServiveService, public userRepos: SearchServiveService) { }

  ngOnInit() {
      this.githubUserRequest.githubUser(this.searchMe);
      this.users = this.githubUserRequest.users;
      this.userRepos.gitUserRepos(this.searchMe);
      console.log(this.userRepos);
  }


    searchRepos() {
        this.searchRepo = '';
        this.resultCount = 10;

    }
}