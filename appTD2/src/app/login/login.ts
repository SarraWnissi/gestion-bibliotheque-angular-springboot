import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username: string = '';
  password: string = '';
  constructor(private serv: Service, private route: Router) {}

  seConnecter() {
    this.serv.Login(this.username, this.password).subscribe({
      next: (data) => {
        if (data == true) {
          this.route.navigate(['/categories']);
        } else {
          alert('svp verifier votre données');
        }
      },
      error: (err) => {},
    });
  }
}
