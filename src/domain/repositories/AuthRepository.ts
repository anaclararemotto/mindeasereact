export interface AuthRepository {
  login(email: string, password: string): Promise<void>;

  signup(data: {
    name: string;
    birthDate: string;
    email: string;
    password: string;
  }): Promise<void>;
}
