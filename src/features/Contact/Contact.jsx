import NewReservationSubscription from "./SubscriptionResult";
import LoginForm from "../Auth/LoginForm.jsx";
import { login } from "../Auth/authRepository";

export default function Contact() {
  const handleLogin = async (email, password) => {
    try {
      const idToken = await login(email, password);
      console.log("Logged in with token:", idToken);
      // ログインに成功した場合の処理
    } catch (error) {
      console.error("Login failed:", error);
      // ログインに失敗した場合の処理
    }
  };

  return (
    <>
      <div>
        <NewReservationSubscription />
        <LoginForm onLogin={handleLogin} />
      </div>
    </>
  );
}
