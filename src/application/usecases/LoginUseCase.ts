import type { AuthRepository } from "@domain/repositories/AuthRepository";

export class LoginUseCase {
  private authRepository: AuthRepository;

  constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository;
  }

  async execute(email: string, password: string) {
    if (!email || !password) {
      throw new Error("EMAIL_PASSWORD_REQUIRED");
    }

    await this.authRepository.login(email, password);
  }
}
