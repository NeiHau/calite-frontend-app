import MessageInput from "./ContactInput";
import MessageList from "./ContactMessageList";

export default function Contact() {
  return (
    <>
      <div className='contact-container'>
        <MessageList />
        <MessageInput />
      </div>
    </>
  );
}
