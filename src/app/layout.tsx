import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Blog",
  description: "Descrição da pagina principal",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="pt-br">
      <body>
        <header>
          <h1>The Blog</h1>
        </header>

        {children}

        <footer>
          <p>© 2025 The Blog. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
