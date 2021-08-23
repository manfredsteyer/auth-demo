import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConf } from './auth.conf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'auth-demo';
  constructor(private oauthService: OAuthService) {
    this.oauthService.configure(authConf);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  get userName() {
    return (this.oauthService.getIdentityClaims() as any)?.['given_name'];
  }

  login() {
    this.oauthService.initLoginFlow();
  }

  logout() {
    this.oauthService.logOut();
  }
}
