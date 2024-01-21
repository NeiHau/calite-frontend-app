import { useMutation } from "@apollo/client";
import { useState } from "react";
import { SEND_MESSAGE_MUTATION } from "../../graphql/mutations/contact.mutation";
import { v4 as uuidv4 } from "uuid";

export default function MessageInput() {
  const [inputValue, setInputValue] = useState("");
  const [sendMessage, { loading, error }] = useMutation(SEND_MESSAGE_MUTATION);

  async function handleSendMessage(event) {
    event.preventDefault();
    if (!inputValue.trim()) return;

    try {
      const { data } = await sendMessage({
        variables: {
          messageId: uuidv4(),
          content: inputValue,
          senderId: uuidv4(),
          chatRoomId: uuidv4(),
          date: Date.now(),
        },
      });

      console.log("Mutation success, data:", data);
    } catch (e) {
      console.error("Error sending message:", e);
    }
  }

  function handleInputChanges(event) {
    setInputValue(event.target.value);
  }

  // レンダリング状態のチェックはここで行います。
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className='contact-input'>
      <form onSubmit={handleSendMessage}>
        <input type='text' value={inputValue} onChange={handleInputChanges} />
        <button type='submit'>送る</button>
      </form>
    </div>
  );
}
