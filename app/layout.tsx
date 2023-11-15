import type { Metadata } from 'next';

import '@/src/styles/globals.css';

import { NextThemeProvider } from '@/src/components/providers/next-theme';
import { generalSans, inter } from '@/src/lib/fonts';
import { cn } from '@/src/lib/utils';

export const metadata: Metadata = {
  title: 'NextJS Template',
  description: 'This is Nextjs template for build application.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(generalSans.variable, inter.variable)}
    >
      <body className={inter.className}>
        <NextThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </NextThemeProvider>
      </body>
    </html>
  );
}
