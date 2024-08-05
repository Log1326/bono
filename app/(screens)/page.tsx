import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
const viewOptions: string[] = [
	'Select your causes',
	'Get your nonprofit portfolio',
	'Make a difference with just $5 a month',
	'Receive weekly impact updates'
]
export default function WelcomePage() {
	return (
		<main className='flex flex-col w-full justify-center items-center px-2'>
			<section className='flex flex-col gap-8 h-[40rem] justify-around sm:justify-center items-start'>
				<div className='flex flex-col gap-4'>
					<div>
						<h1 className='text-xl font-extrabold'>Welcome to Bono!</h1>
						<p className='text-wrap text-xs'>
							The easiest wat to donate to causes you care about and see your
							impact
						</p>
					</div>

					<ol className='space-y-2'>
						{viewOptions.map((item, index) => (
							<li className='text-black text-lg' key={index}>
								<span className='mr-3 bg-blue-500 text-white rounded-full px-2 py-0.5'>
									{index + 1}
								</span>
								{item}
							</li>
						))}
					</ol>
				</div>

				<div className='flex flex-col text-lg justify-center items-center w-full gap-6'>
					<Link href='/causes'>
						<Button className='w-full sm:w-72 rounded-full space-x-2'>
							<p>Let&apos;s Start</p>
							<ArrowRight size={18} />
						</Button>
					</Link>

					<div className='flex flex-col text-center'>
						<div className='sm:hidden flex flex-row items-center justify-center'>
							<span className='sm:text-lg text-xs'>
								Already joined the movement?
							</span>
							<Button
								variant='link'
								className='font-bold p-1 sm:text-lg text-xs'
							>
								Log In
							</Button>
						</div>
						<div className='block sm:flex-col flex-row items-center justify-center text-center text-wrap'>
							<p className='text-sm'>
								By clicking Let&apos;s Start you agree to our
							</p>
							<div className='flex flex-wrap gap-1 items-center justify-center'>
								<Link
									href='https://www.bono.so/tc'
									className='text-xs font-light underline'
								>
									Terms And Conditions
								</Link>
								<p className='text-xs'>and</p>
								<Link
									href='https://www.bono.so/privacy-policy'
									target='_blank'
									className='text-xs font-light underline'
								>
									Privacy Policy
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
