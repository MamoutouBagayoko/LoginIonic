import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    private detail:string;
  constructor(private auth: AuthService,
    private router:Router) { }

  ngOnInit() {
    this.auth.userDetails().subscribe(response => {
      if (response !== null) {
        this.detail = response.email;
      } else {
        this.router.navigateByUrl('');
      }
    }, error => {
      console.log(error);
    })
  }

}
