'use client'

import { Button } from './ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

export const Header = () => {
	const pathname = usePathname()
	const isOnCausesPage = pathname === '/causes'
	return (
		<header
			className={cn(
				'flex justify-between px-5 items-center bg-transparent sm:bg-header-background w-full h-16',
				{
					hidden: isOnCausesPage
				}
			)}
		>
			<div className='bg-black pt-1 pl-1 pb-0.5 pr-0.5 -skew-y-12 -rotate-3'>
				<Link
					href='/'
					className='bg-white cursor-pointer text-black font-extrabold p-0.5 text-sm'
				>
					BONO
				</Link>
			</div>
			<Button
				variant='outline'
				className='hidden sm:block bg-black text-white rounded-full'
			>
				Login
			</Button>
		</header>
	)
}
