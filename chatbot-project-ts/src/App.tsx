import { useState, useEffect } from "react";
import { ChatInput } from "./components/ChatInput";
import RobotProfileImage from "./assets/robot.png";
import ChatMessages from "./components/ChatMessages";
import "./App.css";

function App() {
    const [chatMessages, setChatMessages] = useState(
        JSON.parse(localStorage.getItem("messages")!) || [],
    );
    useEffect(() => {
        localStorage.setItem("messages", JSON.stringify(chatMessages));
    }, [chatMessages]);

    //const [chatMessages,setChatMessages] = array;
    //const chatMessages = array[0];
    //const setChatMessages = array[1];

    const title = `${chatMessages.length} Messages`;

    return (
        <>
            <title>{title}</title>
            <link rel="icon" type="image/svg+xml" href={RobotProfileImage} />
            <div className="app-container">
                <ChatMessages chatMessages={chatMessages} />
                <ChatInput
                    chatMessages={chatMessages}
                    setChatMessages={setChatMessages}
                />
            </div>
        </>
    );
}

export default App;
