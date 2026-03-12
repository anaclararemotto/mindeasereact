import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebaseConfig";
import type { AuthRepository } from "@domain/repositories/AuthRepository";
import { doc, setDoc } from "firebase/firestore";

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
    birthDate: string;
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
}
