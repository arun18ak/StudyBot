function MessageBubble({ message, sender }) {

  const isUser = sender === "user";

  return (
    <div className="mb-8">

      <div
        className={`
        flex
        items-start
        gap-4
        ${isUser ? "justify-end" : ""}
        `}
      >

        {!isUser && (
          <div
            className="
            w-10
            h-10
            rounded-full
            bg-green-600
            flex
            items-center
            justify-center
            font-bold
            "
          >
            AI
          </div>
        )}

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
          <div>
            {msg.message}
          </div>

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

        <div
          className={`
          max-w-[75%]
          ${
            isUser
              ? "bg-blue-600"
              : "bg-[#2f2f2f]"
          }
          px-5
          py-4
          rounded-2xl
          text-white
          `}
        >
          {message}
        </div>

        {isUser && (
          <div
            className="
            w-10
            h-10
            rounded-full
            bg-purple-600
            flex
            items-center
            justify-center
            font-bold
            "
          >
            AK
          </div>
        )}

      </div>

    </div>
  );
}

export default MessageBubble;