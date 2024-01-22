import React from "react";

const MessageItem = React.memo(({ message }) => {
  return <div className='message'>{message}</div>;
});

export default MessageItem;
