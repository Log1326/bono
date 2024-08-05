import { ArrowLeftBack } from '@/components/ArrowLeftBack'
import { CausesCard } from '@/components/CausesCard'
import { IResponseCause } from '@/types/causes.types'
import { Metadata } from 'next'
import { apiUrl } from '@/lib/fetcher'

export async function generateMetadata(): Promise<Metadata> {
	try {
		const response = await fetch(apiUrl + '/charity/causes')
		const products: IResponseCause = await response.json()

		const randomIndex = Math.floor(Math.random() * products.data.length)
		const product = products.data[randomIndex]

		if (!product) throw new Error('No product found')

		return {
			title: product.title,
			description: product.description,
			openGraph: {
				title: product.title,
				description: product.description,
				url: 'https://app.bono.so/causes',
				images: [
					{
						url: product.icon,
						alt: 'Bono image'
					}
				]
			},
			twitter: {
				card: 'summary_large_image',
				title: product.title,
				description: product.description,
				images: [
					{
						url: product.icon,
						alt: 'Bono image'
					}
				],
				site: '@yourtwitterhandle'
			},
			alternates: {
				canonical: 'https://app.bono.so/causes'
			}
		}
	} catch (error) {
		console.error('Failed to fetch product data:', error)
		return {
			title: 'Bono | Causes',
			description:
				'Choose how you want to help, set up a monthly giving plan, and let us handle the rest. Visit to learn more.',
			openGraph: {
				title: 'Bono',
				description:
					'Choose how you want to help, set up a monthly giving plan, and let us handle the rest. Visit to learn more.',
				url: 'https://app.bono.so/causes',
				images: [
					{
						url: 'https://raw.githubusercontent.com/TheBonoWay/Frontend-Home-assignment/main/screens/01_welcome/Frame.png',
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
						url: 'https://raw.githubusercontent.com/TheBonoWay/Frontend-Home-assignment/main/screens/01_welcome/Frame.png',
						alt: 'Bono image'
					}
				],
				site: '@yourtwitterhandle'
			},
			alternates: {
				canonical: 'https://app.bono.so/causes'
			}
		}
	}
}

export default function CausesPage() {
	return (
		<main className='p-10'>
			<ArrowLeftBack />
			<CausesCard />
		</main>
	)
}
