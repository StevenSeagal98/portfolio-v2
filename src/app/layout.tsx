import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import MainNav from '@/components/global/MainNav';
import Footer from '@/components/global/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Nate Orona - Full Stack Developer',
  description: 'Creating scalable, user-focused applications to elevate digital experiences.',
  icons: {
    icon: [{ url: 'https://res.cloudinary.com/dwb1mcupk/image/upload/v1757030914/Logo_kghuei.jpg', type: 'image/jpg' }],
    apple: [{ url: 'https://res.cloudinary.com/dwb1mcupk/image/upload/v1757030914/Logo_kghuei.jpg', type: 'image/jpg' }]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <MainNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
