import { AppError } from "@/shared/errors/AppError";

import {

    generateAccessToken,

    hashPassword,

    verifyCode,

    verifyPassword,

} from "@/shared/security";

import { AuthRepository } from "../repositories/auth.repository";

import {

    ActivateAccountDto,

    LoginDto,

} from "../types/auth.types";

import {

  generateActivationCode,

  hashCode,

} from "@/shared/security";

export class AuthService {

    constructor(

        private readonly repository =
            new AuthRepository(),

    ) {}

    async activate(

        dto: ActivateAccountDto,

    ) {

        const profile =
            await this.repository.findByNationalId(
                dto.nationalId,
            );

        if (!profile)

            throw new AppError(
                "Member not found.",
                404,
            );

        if (
            profile.account_status ===
            "active"
        )

            throw new AppError(
                "Account already activated.",
                400,
            );

        if (
            !profile.activation_code_hash
        )

            throw new AppError(
                "Activation code missing.",
                400,
            );

        const valid =
            await verifyCode(

                dto.activationCode,

                profile.activation_code_hash,

            );

        if (!valid)

            throw new AppError(
                "Invalid activation code.",
                401,
            );

        const passwordHash =
            await hashPassword(
                dto.password,
            );

        await this.repository.updateActivation(

            profile.id,

            {

                password_hash:
                    passwordHash,

                activation_code_hash:
                    null,

                activation_expires_at:
                    null,

                account_status:
                    "active",

            },

        );

        return {

            success: true,

            message:
                "Account activated successfully.",

        };

    }

    async generateMemberActivationCode(

      profileId: string,
  
  ) {
  
      const activationCode =
          generateActivationCode();
  
      const hash =
          await hashCode(
              activationCode,
          );
  
      const expires =
          new Date(
              Date.now()
              + 1000
              * 60
              * 60
              * 24
              * 7,
          ).toISOString();
  
      await this.repository
          .saveActivationCode(
  
              profileId,
  
              hash,
  
              expires,
  
          );
  
      return {
  
          activationCode,
  
          expiresAt:
              expires,
  
      };
  
  }

    async login(

        dto: LoginDto,

    ) {

        const profile =
            await this.repository.findByNationalId(
                dto.nationalId,
            );

        if (!profile)

            throw new AppError(
                "Invalid credentials.",
                401,
            );

        if (
            profile.account_status !==
            "active"
        )

            throw new AppError(
                "Account not activated.",
                403,
            );

        const valid =
            await verifyPassword(

                dto.password,

                profile.password_hash,

            );

        if (!valid)

            throw new AppError(
                "Invalid credentials.",
                401,
            );

        await this.repository.updateLogin(

            profile.id,

            0,

            new Date().toISOString(),

        );

        const token =
            generateAccessToken({

                id: profile.id,

                nationalId:
                    profile.national_id,

                role: "member",

            });

        return {

            accessToken: token,

            user: {

                id: profile.id,

                fullName:
                    profile.full_name,

                nationalId:
                    profile.national_id,

                accountStatus:
                    profile.account_status,

            },

        };

    }

}