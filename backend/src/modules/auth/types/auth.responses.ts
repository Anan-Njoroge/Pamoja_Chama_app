import {

    AuthUser,

} from "./auth.types";

export interface AuthResponse {

    success: boolean;

    message: string;

    data: {

        accessToken: string;

        user: AuthUser;

    };

}