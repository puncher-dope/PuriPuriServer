import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { jwtConstants } from "./constants";

type PayloadT ={
    sub: string,
    login: string,
    role: string
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConstants.secret
        })
    }

    async validate(payload: PayloadT){
        //данные пользователя, которые будут доступны в @Request()
        return {
            userId:payload.sub,
            userLogin:payload.login,
            userRole:payload.role,
        }
    }
}