interface Project {
	id: string
	src: string
	title: string
	date: number
	author: string
	description: string
	technologies: string[]
	features: string[]
	gallery: string[]
}

const projectData: Project[] = [
	{
		id: 'project-1',
		src: '/projectImage1.jpg',
		title: 'Solar Farm Expansion Initiative',
		date: new Date('December 15, 2024').getTime(),
		author: 'Christopher Jack',
		description: 'A large-scale solar farm expansion aimed at increasing clean energy production in urban areas.',
		technologies: ['Solar Panels', 'Battery Storage', 'Inverters'],
		features: ['100 MW capacity', '10,000 solar panels', 'Integrated battery system'],
		gallery: ['/projectImage1.jpg', '/projectImage1a.jpg', '/projectImage1b.jpg'],
	},
	{
		id: 'project-2',
		src: '/projectImage2.jpg',
		title: 'Offshore Wind Turbine Development',
		date: new Date('November 10, 2024').getTime(),
		author: 'Sophia Green',
		description: 'Building state-of-the-art offshore wind turbines for sustainable energy generation.',
		technologies: ['Wind Turbines', 'Offshore Platforms', 'HVAC Systems'],
		features: ['200 MW capacity', '20 turbines', 'Remote monitoring system'],
		gallery: ['/projectImage2.jpg', '/projectImage2a.jpg', '/projectImage2b.jpg'],
	},
	{
		id: 'project-3',
		src: '/projectImage3.jpg',
		title: 'Geothermal Energy Plant in Iceland',
		date: new Date('October 20, 2024').getTime(),
		author: 'Michael Brown',
		description: 'Developing a geothermal plant to harness Earth’s heat for sustainable power.',
		technologies: ['Geothermal Drilling', 'Heat Exchangers', 'Turbine Generators'],
		features: ['50 MW capacity', 'Environmentally safe drilling', 'Low maintenance system'],
		gallery: ['/projectImage3.jpg', '/projectImage3a.jpg', '/projectImage3b.jpg'],
	},
	{
		id: 'project-4',
		src: '/projectImage4.jpg',
		title: 'Hydropower Station Modernization',
		date: new Date('September 5, 2024').getTime(),
		author: 'Emily White',
		description: 'Modernizing hydropower stations to improve efficiency and capacity.',
		technologies: ['Turbine Upgrades', 'Advanced Control Systems', 'Hydraulic Generators'],
		features: ['Increased capacity by 25%', 'AI-based efficiency monitoring', 'Reduced operational costs'],
		gallery: ['/projectImage4.jpg', '/projectImage4a.jpg', '/projectImage4b.jpg'],
	},
	{
		id: 'project-5',
		src: '/projectImage5.jpg',
		title: 'Community Solar Panel Project',
		date: new Date('August 12, 2024').getTime(),
		author: 'Liam Carter',
		description: 'A project enabling communities to co-own and benefit from solar panel installations.',
		technologies: ['Community Shared Solar', 'Photovoltaic Panels', 'Energy Management Systems'],
		features: ['Affordable clean energy', 'Revenue-sharing model', 'Localized energy grids'],
		gallery: ['/projectImage5.jpg', '/projectImage5a.jpg', '/projectImage5b.jpg'],
	},
	{
		id: 'project-6',
		src: '/projectImage6.jpg',
		title: 'Biomass Energy for Rural Areas',
		date: new Date('July 22, 2024').getTime(),
		author: 'Emma Wilson',
		description: 'Providing biomass energy solutions for underdeveloped rural areas.',
		technologies: ['Biomass Boilers', 'Organic Waste Processing', 'Gasification Systems'],
		features: ['Eco-friendly waste management', 'Low-cost energy production', 'Job creation in rural areas'],
		gallery: ['/projectImage6.jpg', '/projectImage6a.jpg', '/projectImage6b.jpg'],
	},
	{
		id: 'project-7',
		src: '/projectImage7.jpg',
		title: 'Innovative Wave Energy Converter',
		date: new Date('June 15, 2024').getTime(),
		author: 'Olivia Martinez',
		description: 'Harnessing ocean waves for renewable energy through cutting-edge technology.',
		technologies: ['Wave Energy Converters', 'Anchoring Systems', 'Dynamic Load Balancers'],
		features: ['Sustainable marine energy', 'Minimal environmental impact', 'Durable design'],
		gallery: ['/projectImage7.jpg', '/projectImage7a.jpg', '/projectImage7b.jpg'],
	},
	{
		id: 'project-8',
		src: '/projectImage8.jpg',
		title: 'Zero-Energy Building Construction',
		date: new Date('May 30, 2024').getTime(),
		author: 'James Lopez',
		description: 'Designing and constructing buildings that produce as much energy as they consume.',
		technologies: ['Passive Solar Design', 'Net-Zero Energy HVAC', 'Energy-Efficient Materials'],
		features: ['Energy self-sufficient', 'Reduced carbon footprint', 'Smart energy monitoring'],
		gallery: ['/projectImage8.jpg', '/projectImage8a.jpg', '/projectImage8b.jpg'],
	},
	{
		id: 'project-9',
		src: '/projectImage9.jpg',
		title: 'Floating Solar Panel Farms',
		date: new Date('April 18, 2024').getTime(),
		author: 'Isabella Thompson',
		description: 'Innovating solar farms that float on bodies of water to maximize efficiency.',
		technologies: ['Floating Photovoltaics', 'Waterproof Solar Panels', 'Smart Inverters'],
		features: ['Increased panel efficiency', 'Water evaporation reduction', 'Cost-effective installation'],
		gallery: ['/projectImage9.jpg', '/projectImage9a.jpg', '/projectImage9b.jpg'],
	},
	{
		id: 'project-10',
		src: '/projectImage10.jpg',
		title: 'Smart Renewable Energy Grids',
		date: new Date('March 10, 2024').getTime(),
		author: 'Noah Johnson',
		description: 'Developing smart grids to integrate renewable energy sources efficiently.',
		technologies: ['Smart Meters', 'Energy Storage Systems', 'Renewable Integration Software'],
		features: ['Real-time energy tracking', 'Improved energy reliability', 'Scalable for urban areas'],
		gallery: ['/projectImage10.jpg', '/projectImage10a.jpg', '/projectImage10b.jpg'],
	},
]

export default projectData
