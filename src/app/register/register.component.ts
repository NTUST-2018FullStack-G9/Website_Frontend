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
  hero;
  constructor(private memberService: MemberService, private router: Router) {}

  ngOnInit() {}
  register() {

    if (this.user.password.length >= 6 && (this.user.password === this.user.password_confirmation)) {
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


}

