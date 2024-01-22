// Contact コンポーネント
import React from "react";
import MessageInput from "./MessageInput";
import MessageList from "./MessageList";
import { useMutation } from "@apollo/client";
import { SEND_MESSAGE_MUTATION } from "../../graphql/mutations/contact.mutation";
import { v4 as uuidv4 } from "uuid";

export default function MessagePage() {
  const [sendMessage, { loading, error }] = useMutation(SEND_MESSAGE_MUTATION);

  const handleSendMessage = async (content) => {
    if (!content.trim()) return;

    try {
      const { data } = await sendMessage({
        variables: {
          messageId: uuidv4(),
          content: content,
          senderId: uuidv4(),
          chatRoomId: uuidv4(),
          date: Date.now(),
        },
      });

      console.log("Mutation success, data:", data);
    } catch (e) {
      console.error("Error sending message:", e);
    }
  };

  return (
    <>
      {/* <div className={`overlay ${loading || error ? "visible" : ""}`}>
        {loading && <p className='loading-container'>Loading中です...</p>}
        {error && <p className='error-container'>エラー：{error.message}</p>}
      </div> */}
      <div className='contact-container'>
        <MessageList />
        <MessageInput onSendMessage={handleSendMessage} />
      </div>
    </>
  );
}
