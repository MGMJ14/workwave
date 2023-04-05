import React from 'react';
import './globals.css';
import Navbar from './components/Navbar';
import { Providers } from './providers';
import ThemeProvider from './theme-provider';




export default async function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>

          <Providers>
            <Navbar />
            {children}
          </Providers>

        </ThemeProvider>

      </body>
    </html>
  );
}
