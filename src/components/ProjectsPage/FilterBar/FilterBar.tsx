import { IoMdSearch } from 'react-icons/io'
import categoriesData from '../../../../data/categoriesData'

const FilterInput = () => {
	return (
		<div className='flex justify-center items-center gap-2'>
			<label htmlFor='search' className='text-secondary font-semibold'>
				Search:
			</label>
			<input
				id='search'
				type='text'
				className='text-secondary rounded-lg bg-[#f7f9f6] border border-gray-300 p-2.5'></input>
			<button className='p-2 bg-primary rounded-full'>
				<IoMdSearch size={25} />
			</button>
		</div>
	)
}
const FilterByCategory = () => {
	return (
		<form className='max-w-sm mx-auto flex justify-center items-center gap-2'>
			<label htmlFor='category' className='text-secondary font-semibold'>
				Category:
			</label>
			<select
				id='category'
				className='bg-[#f7f9f6] border border-gray-300 text-secondary text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 '>
				<option selected>All</option>
				{categoriesData.map(category => (
					<option key={category.id} value={category.value}>
						{category.name}
					</option>
				))}
			</select>
		</form>
	)
}
const SortBy = () => {
	return (
		<form className='max-w-sm mx-auto flex justify-center items-center gap-2'>
			<label htmlFor='sort' className='text-secondary font-semibold'>
				Sort:
			</label>
			<select
				id='sort'
				className='bg-[#f7f9f6] border border-gray-300 text-secondary text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 '>
				<option selected>Latest</option>
				<option value='Oldest'>Oldest</option>
			</select>
		</form>
	)
}
const FilterBar = () => {
	return (
		<div className='w-full  flex  flex-col md:flex-row justify-between items-center p-2   '>
			<FilterInput />
			<FilterByCategory />
			<SortBy />
		</div>
	)
}

export default FilterBar
