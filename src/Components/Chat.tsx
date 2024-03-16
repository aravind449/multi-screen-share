import React, { useState, useRef, useEffect } from "react";

interface Message {
  text: string;
  sender: "me" | "peer";
}

interface Props {
  dataConnection: { current: any }; // Adjust the type as needed
}

const Chat: React.FC<Props> = ({ dataConnection }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [messageInput, setMessageInput] = useState("");

  const messageListRef = useRef<HTMLDivElement>(null);

  const sendMessage = () => {
    if (!dataConnection || messageInput.trim() === "") return;

    // Send the message through data connection
    //  dataConnection.send(messageInput);

    // Update local state with the sent message
    setMessages([...messages, { text: messageInput, sender: "me" }]);

    // Clear the message input
    setMessageInput("");
  };

  useEffect(() => {
    if (!dataConnection) return;

    // Receive message from remote peer
    const handleData = (data: string) => {
      setMessages([...messages, { text: data, sender: "peer" }]);
    };

    // dataConnection.on("data", handleData);

    return () => {
      // dataConnection.off("data", handleData);
    };
  }, [dataConnection, messages]);

  return (
    <div className="chat">
      <div className="message-list" ref={messageListRef}>
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <span>{msg.sender === "me" ? "You" : "Peer"}:</span> {msg.text}
          </div>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
