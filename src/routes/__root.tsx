import { Navbar } from "@/components/ui/navbar";
import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <body className="w-full bg-background text-foreground xl:px-96 lg:px-48 md:px-12 sm:px-8 box-border">
      <Navbar />
      <Outlet />
    </body>
  ),
});
