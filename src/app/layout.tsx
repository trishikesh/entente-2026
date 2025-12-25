import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'ENTENTE-2026 | Knowledge Society in Transition',
  description:
    'ENTENTE-2026: 5th International Conference on Knowledge Society in Transition - Advancing Sustainability through Multidisciplinary Research. Hosted by NIIT University, Neemrana.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-maroon">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
