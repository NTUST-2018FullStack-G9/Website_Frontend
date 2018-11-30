import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  constructor(private memberService: MemberService) {}
  data = {
    email: ''
  };

  ngOnInit() {}
  reset() {
    console.log(this.data);
    this.memberService.reset(this.data).subscribe(
      (data: any) => {
        console.log(data);
        if (data.success) {
          alert('success send email to ur account');
        } else {
          alert('fail to send email');
        }
      },
      response => {
        if (response.status === 404) {
          alert('we cant find a member with that email');
        }
        console.log(response);
      }
    );
  }
}
