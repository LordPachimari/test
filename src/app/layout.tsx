import { env } from "~/env.mjs";

import "~/styles/globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className="min-h-screen bg-neutral-50 font-sans antialiased dark:bg-neutral-950">
          {children}
        </body>
      </html>
    </>
  );
}
