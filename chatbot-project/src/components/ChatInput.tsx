import { useState,} from "react";
import { Chatbot } from "supersimpledev";
import LoadingGifs from "../assets/loading-spinner.gif"
import './ChatInput.css';
import type { ChatMessageType } from "./ChatMessages";

type ChatInputProps = {
    chatMessages: ChatMessageType[];
    setChatMessages: React.Dispatch<React.SetStateAction<ChatMessageType[]>>;
}

export function ChatInput({ chatMessages, setChatMessages }: ChatInputProps) {
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function saveInputText(event:React.ChangeEvent<HTMLInputElement> ) {
        setInputText(event.target.value);
    }

    async function sendMessage() {
        if (isLoading || inputText === "") {
            return;
        }
        setIsLoading(true);

        setInputText("");

        const newChatMessages = [
            ...chatMessages,
            {
                message: inputText,
                sender: "user",
                id: crypto.randomUUID(),
            },
        ];

        setChatMessages([
            ...newChatMessages,
            {
                message: <img className="loading-design" src={LoadingGifs} />,
                sender: "robot",
                id: crypto.randomUUID(),
            },
        ]);

        const response = await Chatbot.getResponseAsync(inputText);

        setChatMessages([
            ...newChatMessages,
            {
                message: response,
                sender: "robot",
                id: crypto.randomUUID(),
            },
        ]);
        setIsLoading(false);
    }

    function EventOnInputs(event: React.KeyboardEvent<HTMLElement>) {
        if (event.key === "Enter") {
            sendMessage();
        }
        if (event.key === "Escape") {
            setInputText("");
        }
    }

    function resetMessage(){
        setChatMessages([]);
        localStorage.setItem('messages',JSON.stringify([]));
    }

    return (
        <div className="chat-input-container">
            <input
                placeholder="Send a message to Chatbot"
                size={30}
                onChange={saveInputText}
                value={inputText}
                onKeyDown={EventOnInputs}
                className="chat-input"
            />
            <button onClick={sendMessage} className="send-button">
                Send
            </button>
            <button onClick={resetMessage}
                className="clear-button">
                Clear
            </button>
        </div>
    );
}