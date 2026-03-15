import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "./firebaseConfig";
import type { AuthRepository } from "@domain/repositories/AuthRepository";
import { doc, setDoc } from "firebase/firestore";
import { TOKEN_KEY } from "@domain/constants/Tokens";

export class FirebaseAuthRepository implements AuthRepository {
  async login(email: string, password: string): Promise<void> {
    await signInWithEmailAndPassword(auth, email, password);
  }

  async signup({
    name,
    birthDate,
    email,
    password,
  }: {
    name: string;
    birthDate: Date;
    email: string;
    password: string;
  }): Promise<void> {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      name,
      birthDate,
      email,
      createdAt: new Date(),
    });
  }

  async sendPasswordReset(email: string): Promise<void> {
    await sendPasswordResetEmail(auth, email);
  }

  async getToken(): Promise<string | null> {
    const user = auth.currentUser;

    if (!user) return null;

    return await user.getIdToken();
  }

  saveToken(token: string) {
    localStorage.setItem(TOKEN_KEY, token);
  }

  getStoredToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  clearToken() {
    localStorage.removeItem(TOKEN_KEY);
  }
}
