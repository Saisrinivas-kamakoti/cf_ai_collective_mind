import { AIChatAgent } from "@cloudflare/ai-chat";
import { createWorkersAI } from "workers-ai-provider";
import { streamText } from "ai";

export class CollectiveMindAgent extends AIChatAgent {
  initialState = {
    thoughts: [] as string[],
    clusters: [] as string[],
  };

  async onChatMessage(message: string) {
    const workersai = createWorkersAI({ binding: this.env.AI });

    const result = await streamText({
      model: workersai("@cf/meta/llama-3.3-70b-instruct-fp8-fast"),
      messages: [
        { role: "system", content: "You are a collective intelligence mapper. Extract themes and connect ideas." },
        { role: "user", content: message }
      ],
    });

    this.setState({
      ...this.state,
      thoughts: [...this.state.thoughts, message],
      clusters: [...this.state.clusters, result.text],
    });

    return result.text;
  }

  @callable()
  async getMindGraph() {
    return {
      thoughts: this.state.thoughts,
      clusters: this.state.clusters,
    };
  }
}
