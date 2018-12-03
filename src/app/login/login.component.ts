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
      console.log(data);
    });
  }
  /*loginSubmit() {
    if (this.userID === '') {
      alert('帳號不能為白');
      return;
    }
    if (this.userPassword === '') {
      alert('密碼不能為白');
    }
    for (let i = 0; i < this.memberServise.members.length; i++) {
      if (
        this.memberServise.members[i].ID === this.userID &&
        this.memberServise.members[i].Password === this.userPassword
      ) {
        alert('登入成功');
        this.memberServise.Islogin = true;
        this.memberServise.nowloginmemberindex = i;
        this.router.navigate(['/']);
        return;
      }
    }
    alert('登入失敗');
    this.userID = '';
    this.userPassword = '';*/
}

