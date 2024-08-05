'use client'

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage
} from '@/components/ui/form'

import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { apiUrl } from '@/lib/fetcher'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'next/navigation'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

// Define schema for form validation using Zod
const formSchema = z.object({
	firstName: z.string().min(2, {
		message: 'Username must be at least 2 characters.'
	}),
	email: z.string().min(2, {
		message: 'email must be at least 2 characters.'
	})
})

export const SignUpForm = () => {
	// Get query parameters from URL
	const searchParams = useSearchParams()
	const causes = searchParams.get('causes') as string
	// Initialize form with validation schema and default values
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			firstName: '',
			email: ''
		}
	})
	// Handle form submission: send data to API endpoint
	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		const data = { ...values, causes: JSON.parse(causes) }
		await axios.post(apiUrl + '/auth/register/anonymous', data)
	}
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='flex flex-col gap-4 items-center justify-center w-full'
			>
				{/* Form field for first name */}
				<FormField
					control={form.control}
					name='firstName'
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input type='text' placeholder='Name' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{/* Form field for email */}
				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input type='email' placeholder='Email' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<p>You will receive a temporary password by email</p>
				{/* Submit button */}
				<Button className='space-x-3' type='submit'>
					<span>Save & Continue</span>
					<ArrowRight size={16} />
				</Button>
			</form>
		</Form>
	)
}
