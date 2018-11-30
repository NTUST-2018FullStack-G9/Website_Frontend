import { Injectable } from '@angular/core';
import { Member } from './member';
interface MemberType {
  ID: string; // email
  Password: string;
}
@Injectable({
  providedIn: 'root'
})
export class MemberService {
  // members: Member[];
  Islogin = false;
  nowloginmemberindex = 0;
  members: MemberType[] = [];
  constructor() {}
}
