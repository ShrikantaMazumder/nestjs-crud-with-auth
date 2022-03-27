import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  login() {
    return { msg: 'This is signin' };
  }

  signup() {
    return { msg: 'This is signup' };
  }
}
