"use client";
import "./globals.css";
import "./data-tables-css.css";
import "./satoshi.css";
import { useState, useEffect } from "react";
import Loader from "@/components/common/Loader";

import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header";
import { Theme } from "@radix-ui/themes";
import { MovieProvider, ComingsoonProvider, EventProvider } from "@/components";
import { CinemaProvider } from "@/components/context/cinema";
import { AuthProvider } from "@/components/context/auth";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Theme>
          <div className="dark:bg-black dark:text-bodydark">
            {loading ? (
              <Loader />
            ) : (
              <div className="flex h-screen overflow-hidden">
                <Sidebar />
                <AuthProvider>
                  <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                    <Header
                      sidebarOpen={sidebarOpen}
                      setSidebarOpen={setSidebarOpen}
                    />

                    <main>
                      <CinemaProvider>
                        <MovieProvider>
                          <ComingsoonProvider>
                            <EventProvider>
                              <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                                {children}
                              </div>
                            </EventProvider>
                          </ComingsoonProvider>
                        </MovieProvider>
                      </CinemaProvider>
                    </main>
                  </div>
                </AuthProvider>
              </div>
            )}
          </div>
        </Theme>
      </body>
    </html>
  );
}
