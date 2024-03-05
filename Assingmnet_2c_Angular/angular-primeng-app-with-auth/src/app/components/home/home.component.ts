import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  userName: string='';

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Retrieve user's name from sessionStorage
    const storedName = sessionStorage.getItem('email');
    if (storedName) {
      this.userName = storedName; // Assign the retrieved name to the class variable
    }
  }

  logOut(): void {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
}
