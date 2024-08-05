'use client'

import { ArrowLeft } from 'lucide-react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

export const ArrowLeftBack = () => {
	const router = useRouter()
	return (
		<div className='w-full flex justify-start pl-20'>
			<Button onClick={() => router.back()} className='w-14 h-14 rounded-full'>
				<ArrowLeft />
			</Button>
		</div>
	)
}
