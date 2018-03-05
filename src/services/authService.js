class AuthService {
  isAuthenticated = false;

  authenticate = () => {
    this.isAuthenticated = true;
  }
}

export default AuthService;
