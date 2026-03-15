import type { AuthRepository } from "@domain/repositories/AuthRepository";

export class SaveAuthToken {
  private authRepository: AuthRepository;

  constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository;
  }

  async execute() {
    const token = await this.authRepository.getToken();

    if (token) {
      this.authRepository.saveToken(token);
    }

    return token;
  }
}
