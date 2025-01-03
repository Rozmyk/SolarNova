export interface ProjectProps {
	id: string
	src: string
	title: string
	date: number
	author: string
	description: string
	technologies: string[]
	features: string[]
	gallery: string[]
	location: string
	powerClass: string
	commissioning: string
	status: string
}
export interface SingleServiceProps {
	text: string
	description: string
	src: string
	single: boolean
	href: string
	faq: faqItemProps[]
}
export interface faqItemProps {
	question: string
	answer: string
}
