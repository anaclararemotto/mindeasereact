export interface AuthRepository {
  login(email: string, password: string): Promise<void>;

  signup(data: {
    name: string;
    birthDate: Date;
    email: string;
    password: string;
  }): Promise<void>;

  sendPasswordReset(email: string): Promise<void>;

  getToken(): Promise<string | null>;
  saveToken(token: string): void;
  getStoredToken(): string | null;
  clearToken(): void;
}
