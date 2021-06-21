import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/userservice/token-storage.service';

@Component({
  selector: 'app-header-container',
  templateUrl: './header-container.component.html',
  styleUrls: ['./header-container.component.css']
})
export class HeaderContainerComponent implements OnInit {

  isLoggedIn = false;

  constructor(private tokenStorageService: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    this.tokenStorageService.loginChanged.subscribe(loginChanged => {
      this.isLoggedIn = !!this.tokenStorageService.getToken();
      console.log('is logged in', this.isLoggedIn);
    });
  }

  onLogout(): void {
    this.tokenStorageService.signOut();
    this.router.navigate(['login']);
  }

}
