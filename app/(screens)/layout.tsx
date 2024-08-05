import { Header } from '@/components/Header'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Bono',
	description:
		'Choose how you want to help, set up a monthly giving plan, and let us handle the rest. Visit to learn more.',
	keywords: [
		'charity',
		'donation',
		'monthly giving',
		'help',
		'Bono',
		'giving plan',
		'philanthropy'
	],
	openGraph: {
		title: 'Bono',
		description:
			'Choose how you want to help, set up a monthly giving plan, and let us handle the rest. Visit to learn more.',
		url: 'https://app.bono.so',
		images: [
			{
				url: 'https://raw.githubusercontent.com/TheBonoWay/Frontend-Home-assignment/main/screens/02_causes/empty%20copy.png',
				alt: 'Bono image'
			}
		]
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Bono',
		description:
			'Choose how you want to help, set up a monthly giving plan, and let us handle the rest. Visit to learn more.',
		images: [
			{
				url: 'https://raw.githubusercontent.com/TheBonoWay/Frontend-Home-assignment/main/screens/02_causes/empty%20copy.png',
				alt: 'Bono image'
			}
		],
		site: '@yourtwitterhandle'
	},
	alternates: {
		canonical: 'https://app.bono.so'
	}
}

export default function ScreensLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<main className='flex flex-col'>
			<Header />
			{children}
		</main>
	)
}
