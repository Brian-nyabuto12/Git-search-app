import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';
import { SearchServiveService } from '../search-servive.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {


  repo: Repo;
  public searchRepo: string;
  public resultCount = 12;

  searchRepos() {
    this.searchRepo = '';
    this.resultCount = 10;
    this.getDataFunction();

  }

  constructor(public gitRepoService: SearchServiveService) { }

  ngOnInit(): void {
    this.resultCount = 5;
    this.gitRepoService.gitUserRepos(this.searchRepo);
  }


  getDataFunction() {
    this.gitRepoService.gitUserRepos(this.searchRepo);

  }

}


