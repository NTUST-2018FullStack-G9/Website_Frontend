import { Injectable } from '@angular/core';
interface MemberType {
  ID: string; // email
  Password: string;
}
@Injectable({
  providedIn: 'root'
})
export class MemberService {
  Islogin = false;
  nowloginmemberindex = 0;
  members: MemberType[] = [];
  constructor() {}
}
