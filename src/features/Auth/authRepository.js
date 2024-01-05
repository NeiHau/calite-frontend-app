/* eslint-disable import/no-anonymous-default-export */
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase-config";

export async function login(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const idToken = await userCredential.user.getIdToken();
    return idToken;
  } catch (error) {
    throw new Error("Failed to login");
  }
}
