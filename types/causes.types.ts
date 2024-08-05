export interface ICause {
	id: number
	active: boolean
	description: string
	icon: string
	impactBackground: string
	impactBody: string | null
	impactHashtag: string
	impactHeader: string | null
	impactImage: string
	order: number
	shortDescription: string
	tagline: string
	title: string
}

export interface ICount {
	count: number
}
export interface IResponseCause extends ICount {
	data: ICause[]
}
