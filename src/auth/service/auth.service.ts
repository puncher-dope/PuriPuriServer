import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'
import { COMPANY_CREDENTIALS } from '../constants';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService){
        this.hashedPassword = bcrypt.hashSync(COMPANY_CREDENTIALS.password, 10)
    }

    private hashedPassword: string


    async validateUser(login: string, password: string): Promise<boolean>{
        if(!login && !password) return false
        if(login !== COMPANY_CREDENTIALS.login) return false

        return bcrypt.compare(password, this.hashedPassword)
    }


    async login(login: string, password: string): Promise<{token: string}>{

        const isValid = this.validateUser(login, password)

        if(!isValid){
            throw new UnauthorizedException('Неверный логин или пароль')
        }

        const payload = {
            sub:'company',
            login: login,
            role: 'company_user'
        }

        const token = await this.jwtService.signAsync(payload)
        
        return {token}
    }
}
