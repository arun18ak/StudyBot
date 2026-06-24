import {
  FaPlus,
  FaBars,
  FaCog,
  FaUserCircle,
  FaComments,
} from "react-icons/fa";

function Sidebar({
  sidebarOpen,
  setSidebarOpen,
  chatHistory,
  setMessages,
  setCurrentChatTitle,
  handleNewChat,
}) {
  return (
    <div
      style={{
        width: sidebarOpen ? "280px" : "70px",
        background: "#171717",
        borderRight: "1px solid #2f2f2f",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s ease",
      }}
    >
      {/* Header */}

      <div
        style={{
          padding: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: sidebarOpen
            ? "space-between"
            : "center",
        }}
      >
        {sidebarOpen && (
          <h2
            style={{
              color: "white",
              margin: 0,
            }}
          >
            StudyGPT
          </h2>
        )}

        <button
          onClick={() =>
            setSidebarOpen(!sidebarOpen)
          }
          style={{
            background: "transparent",
            border: "none",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
          }}
        >
          <FaBars />
        </button>
      </div>

      {/* New Chat */}

      <div
        style={{
          padding: "10px",
        }}
      >
        <button
          onClick={handleNewChat}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "12px",
            border: "none",
            background: "#2a2a2a",
            color: "white",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: sidebarOpen
              ? "flex-start"
              : "center",
            gap: "10px",
          }}
        >
          <FaPlus />
          {sidebarOpen && "New Chat"}
        </button>
      </div>

      {/* History */}

      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "10px",
        }}
      >
        {sidebarOpen && (
          <p
            style={{
              color: "#888",
              fontSize: "13px",
              marginBottom: "15px",
            }}
          >
            Recent Chats
          </p>
        )}

        {chatHistory.length === 0 &&
          sidebarOpen && (
            <p
              style={{
                color: "#666",
                fontSize: "13px",
              }}
            >
              No chats yet
            </p>
          )}

        {chatHistory.map(
          (chat, index) => (
            <div
              key={index}
              onClick={() => {
                setMessages(
                  chat.messages
                );

                setCurrentChatTitle(
                  chat.title
                );
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px",
                marginBottom: "8px",
                borderRadius: "10px",
                background:
                  "#222222",
                color: "white",
                cursor: "pointer",
              }}
            >
              <FaComments />

              {sidebarOpen &&
                chat.title}
            </div>
          )
        )}
      </div>

      {/* Bottom */}

      <div
        style={{
          borderTop:
            "1px solid #2f2f2f",
          padding: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "10px",
            color: "white",
            cursor: "pointer",
          }}
        >
          <FaCog />

          {sidebarOpen &&
            "Settings"}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "10px",
            color: "white",
            cursor: "pointer",
          }}
        >
          <FaUserCircle />

          {sidebarOpen &&
            "Arun Kumar"}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;