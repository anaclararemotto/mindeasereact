import type { AuthRepository } from "@domain/repositories/AuthRepository";

export class SignupUseCase {
  private authRepository: AuthRepository;

  constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository;
  }

  async execute(data: {
    name: string;
    birthDate: string;
    email: string;
    password: string;
  }) {
    const { name, birthDate, email, password } = data;

    if (!name || !birthDate || !email || !password) {
      throw new Error("SIGNUP_FIELDS_REQUIRED");
    }

    await this.authRepository.signup(data);
  }
}
