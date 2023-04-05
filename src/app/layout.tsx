import React from 'react';
import './globals.css';
import Navbar from './components/Navbar';
import { Providers } from './providers';

export default async function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
