import { Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';
import {v4 as uuid} from 'uuid';
import { hashSync as bcryptHasSync } from 'bcrypt';

@Injectable()
export class UsersService {
    private readonly users: UserDto[] = []

    // método create
    create(newUser: UserDto){
        newUser.id = uuid();
        newUser.password = bcryptHasSync(newUser.password, 10);
        this.users.push(newUser);
    }
    
    findByUserName(username: string): UserDto | null {
        return this.users.find(user => user.username === username);
    }
}
