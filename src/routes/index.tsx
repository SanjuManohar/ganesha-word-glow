import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sanju's Ganesha Word Hunt" },
      {
        name: "description",
        content:
          "A festive Ganesha-themed word hunt game with 100 levels, student progress, and a leaderboard.",
      },
      { property: "og:title", content: "Sanju's Ganesha Word Hunt" },
      {
        property: "og:description",
        content:
          "Find hidden words, complete 100 festive levels, and celebrate your progress.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="h-dvh w-full overflow-hidden bg-background">
      <iframe
        className="h-full w-full border-0"
        src="/game.html"
        title="Sanju's Ganesha Word Hunt game"
      />
    </main>
  );
}
