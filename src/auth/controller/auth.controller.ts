import { Body, Controller, HttpCode, HttpStatus, Post, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../service/auth.service';

class LoginDto {
  login: string;
  password: string;
}

@Controller('auth')
export class AuthController {
    constructor(private readonly authSercice: AuthService){}

    @Post('login')
    @HttpCode(HttpStatus.OK)
    async login(@Body() loginDto: LoginDto){
        if(!loginDto){
            throw new UnauthorizedException('Неверный логин или пароль')
        }
        return this.authSercice.login(loginDto.login, loginDto.password)
    }

    @Post('logout')
    @HttpCode(HttpStatus.OK)
    async logout(){
        return {
            message: 'Успешный выход из системы. Токен больше не действителен на клиенте.' 
        }
    }
}
