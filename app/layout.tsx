import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import StoreProvider from './StoreProvider';
import Header from '@/components/home/header';
import { Footer } from '@/components/home/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Next Basket E-Commerce',
	description: 'E-Commerce web application',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<StoreProvider>
				<body className={inter.className}>
					<Header />
					{children}
					<Footer />
				</body>
			</StoreProvider>
		</html>
	);
}
