# cf_ai_collective_mind
An agent that builds a “collective intelligence map” by connecting user thoughts, questions, and reflections in real time. Instead of just answering queries, it remembers them, clusters them into themes, and shows how different users’ ideas interconnect globally. Think of it as a living, evolving “mind graph” powered by Cloudflare’s agentic AI.

Components
LLM (Workers AI / Llama 3.3):  
Interprets user input, extracts themes, and generates summaries or insights.

Workflow / Coordination (Durable Objects + Workflows):  
Each user has a “Mind Node” Durable Object. A global workflow links nodes into clusters (e.g., “climate change,” “AI ethics,” “personal growth”).

User Input (Pages + Realtime):  
Users type or speak their thoughts into a chat/voice interface. Voice input is transcribed and stored.

Memory / State:  
Durable Objects store each user’s history. Vectorize indexes themes across all users to form the collective map.

# Collective Mind Agent

An AI-powered agent that builds a global map of interconnected thoughts.

## Setup
```bash
npx create-cloudflare@latest --template cloudflare/agents-starter
cd cf_ai_collective_mind
npm install
npm run dev

## Usage
- Share your thoughts via chat or voice.
- Agent interprets and clusters them into themes.
- Explore the evolving "Collective Mind" graph in real time.
