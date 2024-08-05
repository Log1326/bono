import { ArrowLeftBack } from '@/components/ArrowLeftBack'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Metadata } from 'next'
import { SignUpForm } from '@/components/SignUpForm'
import { Suspense } from 'react'

export const metadata: Metadata = {
	title: 'Bono | Sign Up',
	description:
		'Choose how you want to help, set up a monthly giving plan, and let us handle the rest. Visit to learn more.',
	openGraph: {
		title: 'Bono | Sign Up',
		description:
			'Choose how you want to help, set up a monthly giving plan, and let us handle the rest. Visit to learn more.',
		images: [
			{
				url: 'https://raw.githubusercontent.com/TheBonoWay/Frontend-Home-assignment/main/screens/03_signup/iPhone%2013%20mini%20-%20172.png',
				alt: 'Bono image'
			}
		],
		url: 'https://app.bono.so'
	},
	twitter: {
		card: 'summary',
		title: 'Bono | Sign Up',
		description:
			'Choose how you want to help, set up a monthly giving plan, and let us handle the rest. Visit to learn more.',
		images: [
			{
				url: 'https://raw.githubusercontent.com/TheBonoWay/Frontend-Home-assignment/main/screens/03_signup/iPhone%2013%20mini%20-%20172.png',
				alt: 'Bono image'
			}
		],
		site: '@yourtwitterhandle'
	},
	keywords: [
		'charity, donation, monthly giving, help, Bono, giving plan, philanthropy,test'
	]
}

export default function SignUpPage() {
	return (
		<div className='h-[40rem] w-full flex flex-col items-center justify-center gap-10'>
			<ArrowLeftBack />

			<div className='text-center'>
				<h1 className='font-extrabold text-xl'>
					Let&apos;s save your portfolio
				</h1>
				<p className='font-semibold'>
					You&apos;ll receive weekly impact reports from Bono.Your email is not
					shared with anymore
				</p>
			</div>
			<Button
				variant='secondary'
				className='space-x-2 w-72 px-3 border border-black rounded-full'
			>
				<Image
					alt='google'
					src='/google.png'
					width={25}
					height={25}
					objectFit='contain'
				/>
				<span>Continue with Google</span>
			</Button>
			<div className='relative  border w-full'>
				<span className='absolute left-1/2 -top-5 text-neutral-500 p-2 bg-background'>
					or
				</span>
			</div>
			<Suspense>
				<SignUpForm />
			</Suspense>
		</div>
	)
}
