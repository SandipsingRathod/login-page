import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userName = new FormControl('', [Validators.required, Validators.email]);
  userPassword = new FormControl('',[Validators.required])
  getErrorMessage() {
    return this.userName.hasError('required') ? 'You must enter a value' :
        this.userName.hasError('userName') ? 'Not a valid userName' :'';
  }
  getErrorMessageFromPassword()
      {
         return this.userPassword.hasError('required') ? 'You must enter a Password' :
             this.userPassword.hasError('userPassword') ? 'Not a valid Password' : '';
     }

  public loginDetail(data) {
        console.log(JSON.stringify(data));
    }
    public cancelPage() {
        location.reload();
    }
}
