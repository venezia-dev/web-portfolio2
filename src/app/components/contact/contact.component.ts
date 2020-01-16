import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  github: any;

  constructor(private router: Router,
    private githubService: GithubService) { }

  ngOnInit() {
    this.getGithub()
  }

  isContactRoute() {
    return this.router.url === '/contacto';
  }

  getGithub() {
    this.githubService.getGithub()
    .subscribe(
      res => {
        this.github = res;
        console.log(this.github)
      },
      err => {
        console.log("No llega la data")
      }
    )
  }


}
