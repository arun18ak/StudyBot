function ChatInput({
  input,
  setInput,
  handleSend,
  handleUpload,
  loading,
}) {
  return (
    <div
      style={{
        padding: "20px",
        borderTop: "1px solid #333",
        background: "#111827",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        {/* Input */}

        <input
          type="text"
          placeholder="Ask anything..."
          value={input}
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
            outline: "none",
            background: "#2a2a2a",
            color: "white",
            fontSize: "15px",
          }}
        />

        {/* Upload Button */}

        <label
          style={{
            padding: "15px",
            background: "#2563eb",
            borderRadius: "12px",
            cursor: "pointer",
            color: "white",
            fontWeight: "bold",
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
            fontWeight: "bold",
          }}
        >
          {loading
            ? "..."
            : "Send"}
        </button>
      </div>
    </div>
  );
}

export default ChatInput;