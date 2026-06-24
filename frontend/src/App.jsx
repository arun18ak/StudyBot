import { useState, useEffect, useRef } from "react";
import axios from "axios";

import Sidebar from "./components/Sidebar";
import { uploadPDF } from "./services/uploadService";

function App() {
  const [messages, setMessages] = useState([
    {
      sender: "assistant",
      message: "Hello Arun! Upload your PDF and ask any question.",
    },
  ]);

  const [sidebarLoaded, setSidebarLoaded] =
  useState(false);

  const [darkMode, setDarkMode] =
  useState(true);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [selectedFile, setSelectedFile] = useState(null);

  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [chatHistory, setChatHistory] = useState([]);

  const [currentChatTitle, setCurrentChatTitle] =
    useState("New Chat");

  const bottomRef = useRef(null);

  // Load History

  useEffect(() => {
    const savedHistory =
      localStorage.getItem("studygpt_history");

    const savedMessages =
      localStorage.getItem("studygpt_messages");

    const savedSidebar =
      localStorage.getItem("sidebar_open");

    if (savedHistory) {
      setChatHistory(JSON.parse(savedHistory));
    }

    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }

    if (savedSidebar) {
      setSidebarOpen(
        JSON.parse(savedSidebar)
      );
    }

    setSidebarLoaded(true);
  }, []);
  // New Chat

  const handleNewChat = () => {

    if (
      messages.length > 1 &&
      currentChatTitle !== "New Chat"
    ) {

      const exists =
        chatHistory.some(
          (chat) =>
            chat.title === currentChatTitle
        );

      if (!exists) {

        setChatHistory((prev) => [
          ...prev,
          {
            title: currentChatTitle,
            messages,
          },
        ]);
      }
    }

    setMessages([
      {
        sender: "assistant",
        message:
          "Hello Arun! Upload your PDF and ask any question.",
      },
    ]);

    setInput("");

    setSelectedFile(null);

    setCurrentChatTitle(
      "New Chat"
    );
  };

  //clear history

  const clearHistory = () => {

    localStorage.removeItem(
      "studygpt_history"
    );

    localStorage.removeItem(
      "studygpt_messages"
    );

    setChatHistory([]);

    setMessages([
      {
        sender: "assistant",
        message:
          "Hello Arun! Upload your PDF and ask any question.",
      },
    ]);
  };

  // Upload PDF

  const handleUpload = async (event) => {
    const file = event.target.files[0];

    if (!file) return;

    setSelectedFile(file);

    try {
      setLoading(true);

      const response = await uploadPDF(file);

      setMessages((prev) => [
        ...prev,
        {
          sender: "assistant",
          message: response.message,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "assistant",
          message: "PDF Upload Failed",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Send Message

  const handleSend = async () => {
    if (!input.trim()) return;

    const question = input;

    if (messages.length === 1) {
      setCurrentChatTitle(question);
    }

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        message: question,
        time:
          new Date().toLocaleTimeString(),
      },
    ]);

    setInput("");

    try {
      setLoading(true);

      const response = await axios.post(
        "http://127.0.0.1:8000/chat",
        {
          question,
        }
      );

      setMessages((prev) => [
        ...prev,
        {
          sender: "assistant",
          message: response.data.answer,
          time:
            new Date().toLocaleTimeString(),
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "assistant",
          message: "Backend connection failed.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        background: darkMode
          ? "#111827"
          : "#f5f5f5",

        color: darkMode
          ? "white"
          : "black",
              }}
    >
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        chatHistory={chatHistory}
        setMessages={setMessages}
        setCurrentChatTitle={
          setCurrentChatTitle
        }
        handleNewChat={handleNewChat}
        clearHistory={clearHistory}
      />

      

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}

        <div
          style={{
            padding: "20px",
            borderBottom: "1px solid #333",
            fontSize: "26px",
            fontWeight: "bold",
          }}
        >
          AI Student Assistant
        </div>

        {/* Uploaded PDF */}

        {selectedFile && (
          <div
            style={{
              padding: "10px 20px",
              color: "#22c55e",
            }}
          >
            📄 {selectedFile.name}
          </div>
        )}

        {/* Messages */}

        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "20px",
          }}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent:
                  msg.sender === "user"
                    ? "flex-end"
                    : "flex-start",
                marginBottom: "20px",
              }}
            >
              <div
              style={{
                maxWidth: "70%",
                padding: "15px",
                borderRadius: "15px",
                background:
                  msg.sender === "user"
                    ? "#2563eb"
                    : "#2a2a2a",
              }}
            >
              <div>{msg.message}</div>

              {msg.time && (
                <div
                  style={{
                    fontSize: "11px",
                    marginTop: "8px",
                    opacity: 0.7,
                  }}
                >
                  {msg.time}
                </div>
              )}
            </div>
            </div>
          ))}

          {loading && (
            <div
              style={{
                background: "#2a2a2a",
                padding: "15px",
                borderRadius: "15px",
                width: "fit-content",
              }}
            >
              🤖 Analyzing document...
            </div>
          )}

          <div ref={bottomRef}></div>
        </div>

        {/* Input Area */}

        <div
          style={{
            padding: "20px",
            borderTop: "1px solid #333",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "10px",
            }}
          >
            <input
              type="text"
              value={input}
              placeholder="Ask anything..."
              onChange={(e) =>
                setInput(e.target.value)
              }
              onKeyDown={(e) =>
                e.key === "Enter" &&
                handleSend()
              }
              style={{
                flex: 1,
                padding: "15px",
                borderRadius: "12px",
                border: "none",
                background: "#2a2a2a",
                color: "white",
                outline: "none",
              }}
            />

            {/* Upload */}

            <label
              style={{
                padding: "15px",
                background: "#2563eb",
                borderRadius: "12px",
                cursor: "pointer",
              }}
            >
              📎

              <input
                type="file"
                accept=".pdf"
                hidden
                onChange={handleUpload}
              />
            </label>

            {/* Send */}

            <button
              onClick={handleSend}
              disabled={loading}
              style={{
                padding: "15px 25px",
                borderRadius: "12px",
                border: "none",
                background: "#2563eb",
                color: "white",
                cursor: "pointer",
              }}
            >
              Send
            </button>
            
            <button
              onClick={() =>
                setDarkMode(!darkMode)
              }
              style={{
                float: "right",
                padding: "8px 12px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
              }}
            >
              {darkMode ? "🌙" : "☀️"}
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;