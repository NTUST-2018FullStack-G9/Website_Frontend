import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: ''
  };
  myform;
  constructor(private memberServise: MemberService, private router: Router) {}


  ngOnInit() {}

  login() {
    // 帳號密碼的檢查
    this.memberServise.login(this.user).subscribe((data: any) => {
      if (data.token) {
        localStorage.setItem('token', data.token);

        this.router.navigate(['/']);
        location.reload();
      } else {
        console.log('fail');
      }
    });
  }


}

