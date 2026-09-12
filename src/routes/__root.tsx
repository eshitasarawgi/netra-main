import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-6">
      <div className="max-w-xl text-center">
        <div className="eyebrow">Error 404</div>
        <h1 className="mt-5 text-5xl font-bold text-foreground">Page not found.</h1>
        <p className="mt-5 text-muted-foreground">The page you are looking for does not exist or has moved.</p>
        <Link to="/" className="mt-8 inline-block bg-foreground px-6 py-3 text-[12px] uppercase tracking-[0.16em] text-background">
          Return Home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-6">
      <div className="max-w-xl text-center">
        <div className="eyebrow">System Error</div>
        <h1 className="mt-5 text-4xl font-bold text-foreground">This page did not load.</h1>
        <p className="mt-5 text-muted-foreground">Please try again or return to the homepage.</p>
        <button onClick={() => { router.invalidate(); reset(); }} className="mt-8 bg-foreground px-6 py-3 text-[12px] uppercase tracking-[0.16em] text-background">
          Try Again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      <main><Outlet /></main>
      <SiteFooter />
    </QueryClientProvider>
  );
}
