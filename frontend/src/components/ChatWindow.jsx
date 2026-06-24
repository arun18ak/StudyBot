import { useEffect, useRef } from "react";

function ChatWindow({
  messages,
  loading,
}) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  return (
    <div
      style={{
        flex: 1,
        overflowY: "auto",
        padding: "20px",
        background: "#111827",
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
              maxWidth: "75%",
              padding: "15px",
              borderRadius: "16px",
              whiteSpace: "pre-wrap",
              lineHeight: "1.6",
              background:
                msg.sender === "user"
                  ? "#2563eb"
                  : "#1f2937",
              color: "white",
              boxShadow:
                "0 4px 12px rgba(0,0,0,0.3)",
            }}
          >
            {msg.message}
          </div>
        </div>
      ))}

      {loading && (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              background: "#1f2937",
              color: "white",
              padding: "15px",
              borderRadius: "16px",
            }}
          >
            🤖 Thinking...
          </div>
        </div>
      )}

      <div ref={bottomRef}></div>
    </div>
  );
}

export default ChatWindow;