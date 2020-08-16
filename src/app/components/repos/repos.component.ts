import { Component, OnInit, Input, OnChanges, ChangeDetectorRef } from '@angular/core';
import { GithubService } from "../../services/github.service";
@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit, OnChanges {
  @Input() repoUrl: string;
  repos = []
  constructor(private gitService : GithubService, private ref : ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngOnChanges():void{
    if (this.repoUrl) {
      this.gitService.getRepos(this.repoUrl).subscribe((repo:[])=>{
        this.repos = repo;
        this.ref.detectChanges();
      },
      (err)=>{
        console.log(err);
      }
      );
    }
  }
}
