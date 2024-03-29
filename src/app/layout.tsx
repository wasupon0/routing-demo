import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Next.js Tutorial",
    template: "%s | Codevolution",
  },
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body>
        <header
          style={{
            backgroundColor: "lightblue",
            padding: "1rem",
          }}
        >
          <p>Header</p>
        </header>

        <div className="p-4">{children}</div>

        <footer
          style={{
            backgroundColor: "lightgray",
            padding: "1rem",
          }}
        >
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
