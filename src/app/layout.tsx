"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ButtomNavbar from "@/components/buttomNavbar";
import { Container } from "@mui/material";
import { usePathname } from "next/navigation";
import { UserProvider } from "@/context/userContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body className={inter.className}>
        <UserProvider>
          <Container
            maxWidth="sm"
            sx={{
              height: "100vh",
              padding: 0,
              justifyContent: "space-between",
            }}
          >
            {children}
            {pathName !== "/login" && pathName !== "/register" ? (
              <ButtomNavbar />
            ) : (
              <></>
            )}
          </Container>
        </UserProvider>
      </body>
    </html>
  );
}
