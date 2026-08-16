import { useAutoScroll } from "./builded-feature/autoscroll";
import { ChatMessage } from "./ChatMessage";
import './ChatMessages.css';

export type ChatMessageType = {
    id: string;
    message: string | React.ReactNode;
    sender: string;
}

type ChatMessagesProps = {
    chatMessages: ChatMessageType[];
}
function ChatMessages({ chatMessages }: ChatMessagesProps) {
    const chatMessagesRef = useAutoScroll(chatMessages);
    return (
        <div className="chat-messages-container" ref={chatMessagesRef}>
            {chatMessages.length === 0 && (
                <p className="welcome-message">
                    Welcome to the chatbot project! Send a message using the
                    textbox below.
                </p>
            )}
            {chatMessages.map((chatMessage) => {
                return (
                    <ChatMessage
                        message={chatMessage.message}
                        sender={chatMessage.sender}
                        key={chatMessage.id}
                    />
                );
            })}
        </div>
    );
}

export default ChatMessages;