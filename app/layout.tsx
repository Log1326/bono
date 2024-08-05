import './globals.css'

import { Inter as FontSans } from 'next/font/google'
import { Metadata } from 'next'

const inter = FontSans({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Bono',
	description:
		'Choose how you want to help, set up a monthly giving plan, and let us handle the rest. Visit to learn more.',
	openGraph: {
		title: 'Bono',
		description:
			'Choose how you want to help, set up a monthly giving plan, and let us handle the rest. Visit to learn more.',
		images: [
			{
				url: 'https://raw.githubusercontent.com/TheBonoWay/Frontend-Home-assignment/main/screens/01_welcome/Frame.png',
				alt: 'Bono image'
			}
		],
		url: 'https://app.bono.so'
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Bono',
		description:
			'Choose how you want to help, set up a monthly giving plan, and let us handle the rest. Visit to learn more.',
		images: [
			{
				url: 'https://raw.githubusercontent.com/TheBonoWay/Frontend-Home-assignment/main/screens/01_welcome/Frame.png',
				alt: 'Bono image'
			}
		],
		site: '@yourtwitterhandle'
	},
	keywords: [
		'charity, donation, monthly giving, help, Bono, giving plan, philanthropy,test'
	]
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	)
}
