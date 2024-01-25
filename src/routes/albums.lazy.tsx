import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/albums")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome to albums!</h3>
    </div>
  );
}
