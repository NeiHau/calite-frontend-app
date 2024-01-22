import { Link } from "react-router-dom";

export default function ContactPage() {
  return (
    <main>
      <h1>お問い合わせはこちらから</h1>
      <Link to='/message'>
        <button>メッセージページへ</button>
      </Link>
    </main>
  );
}
