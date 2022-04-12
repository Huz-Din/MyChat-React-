import { useParams } from "react-router-dom";

const MessageList = ({ chats }) => {
  let { chatId } = useParams();

  if (!chats[chatId]) return null;

  const messages = chats[chatId].messages;

  return (
    <div>
      {messages.map((element, index) => (
        <div key={index}>
          <p>{element.text}</p>
          <p>{element.author}</p>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
