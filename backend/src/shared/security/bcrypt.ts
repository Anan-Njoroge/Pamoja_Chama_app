import bcrypt from "bcrypt";
import env from "@/config/env";

const SALT_ROUNDS =
    Number(env.BCRYPT_ROUNDS ?? 12);

export async function hashPassword(
    password: string,
): Promise<string> {

    return bcrypt.hash(
        password,
        SALT_ROUNDS,
    );

}

export async function verifyPassword(

    password: string,

    hash: string,

): Promise<boolean> {

    return bcrypt.compare(
        password,
        hash,
    );

}

export async function hashCode(

    code: string,

): Promise<string> {

    return bcrypt.hash(
        code,
        SALT_ROUNDS,
    );

}

export async function verifyCode(

    code: string,

    hash: string,

): Promise<boolean> {

    return bcrypt.compare(
        code,
        hash,
    );

}