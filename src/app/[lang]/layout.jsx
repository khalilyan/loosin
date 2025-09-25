import '../styles/globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Loosin - Luxury Jewelry Shop',
  description: 'Discover our exquisite collection of handcrafted jewelry pieces.',
};

export default function RootLayout({ children, params }) {
  return (
    <html lang={params?.lang || 'en'}>
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}