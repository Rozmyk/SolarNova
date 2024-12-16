interface Project {
	id: string
	src: string
	title: string
	date: number
	author: string
}

const projectData: Project[] = [
	{
		id: 'project-1',
		src: '/projectImage1.jpg',
		title: 'Solar Farm Expansion Initiative',
		date: new Date('December 15, 2024').getTime(),
		author: 'Christopher Jack',
	},
	{
		id: 'project-2',
		src: '/projectImage2.jpg',
		title: 'Offshore Wind Turbine Development',
		date: new Date('November 10, 2024').getTime(),
		author: 'Sophia Green',
	},
	{
		id: 'project-3',
		src: '/projectImage3.jpg',
		title: 'Geothermal Energy Plant in Iceland',
		date: new Date('October 20, 2024').getTime(),
		author: 'Michael Brown',
	},
	{
		id: 'project-4',
		src: '/projectImage4.jpg',
		title: 'Hydropower Station Modernization',
		date: new Date('September 5, 2024').getTime(),
		author: 'Emily White',
	},
	{
		id: 'project-5',
		src: '/projectImage5.jpg',
		title: 'Community Solar Panel Project',
		date: new Date('August 12, 2024').getTime(),
		author: 'Liam Carter',
	},
	{
		id: 'project-6',
		src: '/projectImage6.jpg',
		title: 'Biomass Energy for Rural Areas',
		date: new Date('July 22, 2024').getTime(),
		author: 'Emma Wilson',
	},
	{
		id: 'project-7',
		src: '/projectImage7.jpg',
		title: 'Innovative Wave Energy Converter',
		date: new Date('June 15, 2024').getTime(),
		author: 'Olivia Martinez',
	},
	{
		id: 'project-8',
		src: '/projectImage8.jpg',
		title: 'Zero-Energy Building Construction',
		date: new Date('May 30, 2024').getTime(),
		author: 'James Lopez',
	},
	{
		id: 'project-9',
		src: '/projectImage9.jpg',
		title: 'Floating Solar Panel Farms',
		date: new Date('April 18, 2024').getTime(),
		author: 'Isabella Thompson',
	},
	{
		id: 'project-10',
		src: '/projectImage10.jpg',
		title: 'Smart Renewable Energy Grids',
		date: new Date('March 10, 2024').getTime(),
		author: 'Noah Johnson',
	},
]

export default projectData
