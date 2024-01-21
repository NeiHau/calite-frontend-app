import React, { useState } from "react";

const MessageInput = React.memo(({ onSendMessage }) => {
  const [inputValue, setInputValue] = useState("");

  async function handleSendMessage(event) {
    event.preventDefault();
    await onSendMessage(inputValue);
    setInputValue("");
  }

  function handleInputChanges(event) {
    setInputValue(event.target.value);
  }

  return (
    <div className='contact-input'>
      <form onSubmit={handleSendMessage}>
        <input type='text' value={inputValue} onChange={handleInputChanges} />
        <button type='submit'>送る</button>
      </form>
    </div>
  );
});

export default MessageInput;
