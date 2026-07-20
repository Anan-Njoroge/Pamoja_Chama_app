import { AuthRepository } from '../repositories/auth.repository';

import { CreateProfileDto } from '../types/auth.types';

export class AuthService {
  constructor(
    private readonly repository =
      new AuthRepository(),
  ) {}

  async createOrGetProfile(
    dto: CreateProfileDto,
  ) {
    const existing =
      await this.repository.findProfile(dto.id);

    if (existing.data) {
      return existing.data;
    }

    const created =
      await this.repository.createProfile(dto);

    return created.data;
  }
}