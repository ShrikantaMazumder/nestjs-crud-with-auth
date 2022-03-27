import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  login() {
    return { msg: 'This is signin' };
  }

  signup() {
    return { msg: 'This is signup' };
  }
}
