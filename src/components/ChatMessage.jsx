import ReactMarkdown from "react-markdown";

export default function ChatMessage({ sender, text }) {


  const isUser = sender === "user";

  return (
    <div
      className={`max-w-[75%] px-3 py-2 rounded-lg text-sm ${isUser ? "ml-auto bg-[#4338CA] text-white" : "mr-auto bg-gray-200 dark:bg-gray-700 text-black dark:text-white"}`}
    >
      {isUser ? text : <ReactMarkdown
        children={text}
        components={{
          li: ({ children }) => <li className="list-disc ml-4">{children}</li>,
          p: ({ children }) => <p className="mb-2">{children}</p>,
          strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
        }}
      />}
    </div>
  )
}
