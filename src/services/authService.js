import auth0 from 'auth0-js';
import { authConfig } from '../config';

class AuthService {
  webAuth = new auth0.WebAuth({
    domain: authConfig.clientDomain,
    clientID: authConfig.clientId
  });

  authorize = () => {
    this.webAuth.authorize({ responseType: 'token id_token', redirectUri: 'http://localhost:3000/callback' });
  }

  handleAuth = () => {
    return new Promise((resolve, reject) => {
      this.webAuth.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
          resolve(1000);
        } else if (err) {
          reject(err);
        }
      });
    });
  }

  setSession(authResult) {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    localStorage.setItem('nickname', authResult.idTokenPayload.nickname);
  }

  getUserName() {
    return localStorage.getItem('nickname');
  }

  logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('nickname');

    window.location.href = '/';
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
}

export default AuthService;
