import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { AuthGuard } from '@nestjs/passport';
import type { Request } from 'express';

class LoginDto {
  login: string;
  password: string;
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authSercice: AuthService) {}
  @Get('checkAuth')
  @UseGuards(AuthGuard('jwt'))
  async checkAuth(@Req() req: Request) {
    return {
      authenticated: true,
      message: 'Все норм',
    };
  }
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: LoginDto) {
    if (!loginDto) {
      throw new UnauthorizedException('Неверный логин или пароль');
    }
    return this.authSercice.login(loginDto.login, loginDto.password);
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  async logout() {
    return {
      message:
        'Успешный выход из системы. Токен больше не действителен на клиенте.',
    };
  }
}
