import { User, UserCredential } from "@angular/fire/auth";
import { UserModel } from "src/app/modules/main/models/usermodel"

export class GlobalData{
    userID?: string
    user!: User

    constructor(){
        return this;
    }

}