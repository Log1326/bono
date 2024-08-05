import axios from 'axios'
export const apiUrl: string = process.env.NEXT_PUBLIC_API_URL!

export const fetcher = (url: string) =>
	axios.get(apiUrl + url).then(res => res.data)
