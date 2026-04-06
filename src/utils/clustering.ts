export function clusterThemes(thoughts: string[]): string[] {
  // Simple placeholder clustering logic
  // In production, you’d use Vectorize or embeddings
  const themes: string[] = [];
  thoughts.forEach((t) => {
    if (t.toLowerCase().includes("ai")) themes.push("AI & Ethics");
    if (t.toLowerCase().includes("climate")) themes.push("Climate Change");
    if (t.toLowerCase().includes("growth")) themes.push("Personal Growth");
  });
  return [...new Set(themes)];
}
