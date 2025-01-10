'use client'
import { FaTelegramPlane } from 'react-icons/fa'
import { MdMail } from 'react-icons/md'
import { useState } from 'react'

const Newsletter = () => {
	const [emailSended, setEmailSended] = useState(false)

	return (
		<div className='flex justify-between items-center gap-2 mb-8'>
			{emailSended ? (
				<p className='text-white font-semibold text-lg'>Email added!</p>
			) : (
				<>
					<label htmlFor='newsletter-email' className='sr-only'>
						Email address
					</label>
					<div className='flex justify-center items-center border border-#c6cbc9 border-solid p-2 gap-2 rounded-lg'>
						<MdMail />
						<input
							type='email'
							id='newsletter-email'
							name='email'
							className='bg-transparent text-xs'
							placeholder='Enter email address'
							aria-label='Enter email address'
						/>
					</div>
					<button
						onClick={() => {
							setEmailSended(true)
						}}
						className='rounded-lg bg-primary p-2 text-white'
						aria-label='Subscribe to newsletter'>
						<FaTelegramPlane />
					</button>
				</>
			)}
		</div>
	)
}

export default Newsletter
