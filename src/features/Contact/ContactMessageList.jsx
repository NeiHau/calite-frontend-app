import { useSubscription } from "@apollo/client";
import { useState, useEffect } from "react";
import { NEW_MESSAGE_SUBSCRIPTION } from "../../graphql/subscriptions/contact.subscription";

export default function MessageList() {
  const [messages, setMessages] = useState([]);
  const { data, loading, error } = useSubscription(NEW_MESSAGE_SUBSCRIPTION);

  useEffect(() => {
    if (data && data.newMessage) {
      console.log("New subscription data:", data);
      setMessages((prevMessages) => [...prevMessages, data.newMessage.content]);
    }
  }, [data]);

  if (loading) return <p>Subscription Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className='messages-list'>
      {messages.map((message, index) => (
        <div key={index} className='message'>
          {message}
        </div>
      ))}
    </div>
  );
}
