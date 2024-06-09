import { Injectable } from "@angular/core";
import { LoginModel } from "../models/login.model";
import { appConstant } from "../../shared/app-constants";
import { UserModel } from "../models/user.model";

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    users: UserModel[] = [];

    constructor() {
    }

    public get userList(): string | null {
        return localStorage.getItem(appConstant.users);
    }

    public get loggedInUser(): string | null {
        return localStorage.getItem(appConstant.loggedInUser);
    }

    addToUsers(user: UserModel) {
        let users = this.userList;

        if (users)
            this.users = JSON.parse(users);

        this.users.push(user);
        localStorage.setItem(appConstant.users, JSON.stringify(this.users));
    }

    authenticate(user: LoginModel): boolean {
        let users = this.userList!;

        if (users) {
            this.users = JSON.parse(users);
        } else {
            return false;
        }

        let userRes = this.users.find(p => p.email == user.email && p.password == user.password);

        if (userRes) {
            localStorage.setItem(appConstant.loggedInUser, JSON.stringify(user));
            return true;
        }
        return false;
    }

    logout() {
        localStorage.setItem(appConstant.loggedInUser, JSON.stringify(''));
    }
}

