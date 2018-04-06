export class AuthService {

          authenticated = false;

          constructor(){
            const authenticated = localStorage.getItem('authenticated');
            if (authenticated) {
              this.authenticated = JSON.parse(authenticated);
            }
          }


          autheticate(
            username:string,
            password:string): boolean{

            if (password.length >3)

            {
              this.authenticated = true;
              localStorage.setItem('authenticated', JSON.stringify(true));
            }
              return this.authenticated;

          }
      }
