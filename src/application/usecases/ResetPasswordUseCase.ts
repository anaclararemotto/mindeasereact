import type { AuthRepository } from "@domain/repositories/AuthRepository";

export class SendPasswordReset {
  private authRepository: AuthRepository;

  constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository;
  }

  async execute(email: string) {
    if (!email) {
      throw new Error("Digite um email");
    }

    await this.authRepository.sendPasswordReset(email);
  }
}
