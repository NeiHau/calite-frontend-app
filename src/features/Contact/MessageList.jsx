import { useSubscription } from "@apollo/client";
import { useState, useEffect, useMemo } from "react";
import { NEW_MESSAGE_SUBSCRIPTION } from "../../graphql/subscriptions/contact.subscription";
import MessageItem from "./MessageItem";

export default function MessageList() {
  const [messages, setMessages] = useState([]);
  const { data, loading, error } = useSubscription(NEW_MESSAGE_SUBSCRIPTION);

  useEffect(() => {
    if (data && data.newMessage) {
      console.log("New subscription data:", data);
      setMessages((prevMessages) => [...prevMessages, data.newMessage.content]);
    }
  }, [data]);

  const messageList = useMemo(() => {
    return messages.map((message, index) => (
      <MessageItem key={index} message={message} />
    ));
  }, [messages]);

  if (loading) return <p>Subscription Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <div className='messages-list'>{messageList}</div>;
}