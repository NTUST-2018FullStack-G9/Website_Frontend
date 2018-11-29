import { Component, OnInit } from '@angular/core';
import { MemberService } from './../member.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = {
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  };

  constructor(private memberService: MemberService, private router: Router) {}

  ngOnInit() {}
  register() {
    if (this.user.password !== this.user.password_confirmation || this.user.password.length < 6 ) {
        alert('format error!');
    } else {
      console.log(this.user);
    this.memberService.register(this.user).subscribe(
      (data: any) => {
        console.log(data);
        if (data.success) {
          this.router.navigate(['/login']);
        } else {
          alert('fail');
        }
      },
      response => {
        console.log(response);
        alert(response.error.message);
      }
    );
    }
  }












  /*RegisterClick() {
    console.log('dsad');
    if (this.RegisterID === '') {
      alert('帳號不能為白');
      this.RegisterPw = '';
      this.RepeatPw = '';
      return;
    }
    if (this.RegisterPw !== this.RepeatPw) {
      alert('密碼需一致');
      this.RegisterPw = '';
      this.RepeatPw = '';
      return;
    }
    for (const member of this.memberService.members) {
      if (this.RegisterID === member.ID) {
        alert('帳號使用過了!');
        this.RegisterPw = '';
        this.RepeatPw = '';
        return;
      }
    }
    this.memberService.members.push({
      ID: this.RegisterID,
      Password: this.RegisterPw
    });
    alert('註冊成功');
    this.router.navigate(['/login']);
  }*/

}
