import { StringValue } from 'ms';

export const COMPANY_CREDENTIALS ={
    login: process.env.LOGIN || 'kim',
    password: process.env.PASSWORD ||'123'
}

export const jwtConstants ={
    secret: process.env.JWT_SECRET || 'SUPER_SECRET_KEY_CHANGE_THIS_IN_PRODUCTION',
    expiresIn:'8h'
} as const