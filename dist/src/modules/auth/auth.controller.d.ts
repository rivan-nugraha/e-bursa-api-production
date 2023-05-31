import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
import { UsersService } from '../masters/users/users.service';
import { Response } from 'express';
export declare class AuthController {
    private authService;
    private userService;
    constructor(authService: AuthService, userService: UsersService);
    login(body: LoginDto, response: Response): Promise<{
        username: any;
        name: any;
        level: any;
        access_token: string;
    }>;
}
