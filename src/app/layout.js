import "./globals.css";
import { Header, Footer, Navigation } from "@/components";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="flex min-h-screen h-full bg-white max-h-screen overflow-hidden">
        <div>
          <Navigation />
        </div>
        <div className="bg-background rounded-4xl w-full flex flex-col justify-between items-center ">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
