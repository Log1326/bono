'use client'

import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger
} from './ui/alert-dialog'
import { ArrowRight, Check, Plus } from 'lucide-react'
import { ICause, IResponseCause } from '@/types/causes.types'

import { Button } from './ui/button'
import Image from 'next/image'
import { Progress } from '@/components/ui/progress'
import { fetcher } from '@/lib/fetcher'
import { useRouter } from 'next/navigation'
import useSWR from 'swr'
import { useState } from 'react'

export const CausesCard = () => {
	// Fetch causes data using SWR
	const { data, error } = useSWR<IResponseCause>('/charity/causes', fetcher)
	const router = useRouter()
	const [saveCard, setSaveCard] = useState<ICause[]>([])
	const [progress, setProgress] = useState<number>(Number)
	const [isAlertOpen, setIsAlertOpen] = useState(Boolean)

	// Function to update the list of selected causes
	const updateCard = (id: number) => () => {
		if (data) {
			const selectedItem = data.data.find(item => item.id === id)
			if (selectedItem) {
				setSaveCard(prev => {
					const isAlreadySaved = prev.some(item => item.id === id)
					let newSaveCard = isAlreadySaved
						? prev.filter(item => item.id !== id)
						: [...prev, selectedItem]

					if (newSaveCard.length > 3) newSaveCard = newSaveCard.slice(1)

					setProgress((newSaveCard.length / 3) * 100)
					return newSaveCard
				})
			}
		}
	}
	// Check if exactly 3 causes are selected
	const isContinue = saveCard.length === 3
	const causes = saveCard.map(item => item.id)
	// Handle button click - either navigate or show alert
	const handleButtonClick = () => {
		if (isContinue) router.push(`/signup?causes=${JSON.stringify(causes)}`)
		else setIsAlertOpen(true)
	}
	const lastItemIndex = saveCard.length - 1
	const lastItem = saveCard[lastItemIndex]
	// Render different states: loading, error, or content
	if (error)
		return (
			<div className='flex justify-center items-center'>Failed to load</div>
		)
	if (!data)
		return <div className='flex justify-center items-center'>Loading...</div>
	return (
		<div className='w-full grid grid-cols-5 place-content-center sm:pt-32 py-10 overflow-hidden px-10'>
			{/* Main content grid */}
			<div className='col-span-5 min-[890px]:col-span-4 flex flex-col gap-6 items-center min-[890px]:pl-10 sm:pl-40 xl:pl-72 min-[1550px]:pl-96 w-full'>
				<div>
					<h1 className='font-extrabold text-3xl'>
						Let&apos;s build your nonprofit portfolio
					</h1>
					<p className='text-center'>
						Pick the 3 causes that you mostly care about
					</p>
				</div>
				<div className='grid grid-cols-2 sm:grid-cols-3 gap-3 place-content-center'>
					{data.data.map(item => {
						const isSelected = saveCard.some(
							savedItem => savedItem.id === item.id
						)

						return (
							<div
								className='w-28 h-28 rounded-2xl flex flex-col flex-wrap justify-between p-2'
								key={item.id}
								style={{ backgroundColor: item.impactBackground }}
							>
								<div className='text-gray-200'>{item.title}</div>
								{isSelected ? (
									<Check
										onClick={updateCard(item.id)}
										className='bg-black rounded-full p-0.5'
										style={{ color: item.impactBackground }}
										color='#fff'
									/>
								) : (
									<Plus
										onClick={updateCard(item.id)}
										className='bg-white rounded-full p-0.5'
										style={{ color: item.impactBackground }}
									/>
								)}
							</div>
						)
					})}
				</div>

				<div className='sm:w-[25rem]'>
					<div className='text-center'>{saveCard.length}/3 causes added</div>
					<Progress value={progress} className='w-auto' />
				</div>
				{/* Alert dialog shown if less than 3 causes are selected */}
				<AlertDialog
					open={isAlertOpen && !isContinue}
					onOpenChange={setIsAlertOpen}
				>
					<AlertDialogTrigger asChild>
						<Button
							onClick={handleButtonClick}
							className='w-52 rounded-full space-x-2'
						>
							<span>Continue</span>
							<ArrowRight size={18} />
						</Button>
					</AlertDialogTrigger>
					<AlertDialogContent className='border-l-4 border-b-4 w-96 border-black px-1 py-4'>
						<AlertDialogHeader>
							<AlertDialogTitle className='text-wrap p-3'>
								Please pick 3 causes for your portfolio in order to continue
							</AlertDialogTitle>
						</AlertDialogHeader>
						<AlertDialogFooter className='mx-auto'>
							<AlertDialogCancel asChild>
								<Button
									onClick={() => setIsAlertOpen(false)}
									className='w-60 rounded-full bg-black hover:bg-black hover:text-white border-white border'
								>
									Got It
								</Button>
							</AlertDialogCancel>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialog>
			</div>

			{/* Last selected cause */}
			<div className='col-span-5 grid place-content-center min-[890px]:col-span-1 mt-3'>
				{lastItem && (
					<div
						className='h-full sm:w-96 px-2 min-[890px]:border-l-2 animate-slide-in-right flex flex-col justify-center items-start gap-3'
						key={lastItem.id}
					>
						<h1 className='font-extrabold text-xl'>{lastItem.title}</h1>
						<p className='text-xs text-wrap w-72'>{lastItem.description}</p>
						<Image
							src={lastItem.icon}
							width={100}
							height={100}
							className='rounded-xl'
							objectFit='contain'
							alt={lastItem.title}
						/>
					</div>
				)}
			</div>
		</div>
	)
}
