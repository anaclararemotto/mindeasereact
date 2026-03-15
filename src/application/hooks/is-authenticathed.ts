import type { AuthRepository } from "@domain/repositories/AuthRepository";

export class IsAuthenticated {
  private authRepository: AuthRepository;

  constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository;
  }

  execute(): boolean {
    const token = this.authRepository.getStoredToken();
    return !!token;
  }
}
