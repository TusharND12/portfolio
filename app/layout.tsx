import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Developer Universe | Full-Stack Portfolio",
  description: "An immersive 3D portfolio experience showcasing full-stack development skills",
  keywords: ["portfolio", "full-stack", "developer", "3D", "Next.js", "React"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Developer Universe",
    description: "An immersive 3D portfolio experience",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

