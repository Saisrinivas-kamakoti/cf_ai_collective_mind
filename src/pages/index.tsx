import React, { useState } from "react";
import { useAgentChat } from "agents/react";

export default function App() {
  const [messages, setMessages] = useState<string[]>([]);
  const agent = useAgentChat({ agent: "CollectiveMindAgent" });

  const sendMessage = async (msg: string) => {
    setMessages([...messages, "You: " + msg]);
    const response = await agent.stub.onChatMessage(msg);
    setMessages([...messages, "You: " + msg, "Agent: " + response]);
  };

  return (
    <div>
      <h1>Collective Mind Agent</h1>
      <div>
        {messages.map((m, i) => (
          <p key={i}>{m}</p>
        ))}
      </div>
      <input
        type="text"
        placeholder="Share your thought..."
        onKeyDown={(e) => {
          if (e.key === "Enter") sendMessage(e.currentTarget.value);
        }}
      />
    </div>
  );
}
