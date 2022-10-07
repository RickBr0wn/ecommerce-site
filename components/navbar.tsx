import Link from 'next/link'

const Navbar = () => {
	return (
		<nav className='flex text-gray-600'>
			{/* Logo */}
			<div className='flex items-center'>
				<div className='bg-gradient-to-r from-purple-400 to-red-600 w-10 h-10 rounded-lg'></div>
				<h1 className='text-2xl ml-2'>Storefront</h1>
			</div>
			{/* Links */}
			<div className='flex ml-auto items-center'>
				<Link href='/'>
					<a className='text-gray-600 hover:text-purple-600 p-4'>Home</a>
				</Link>
				<Link href='/'>
					<a className='text-gray-600 hover:text-purple-600 p-4'>Shop</a>
				</Link>
				<Link href='/'>
					<a className='text-gray-600 hover:text-purple-600 p-4'>Blog</a>
				</Link>
				<Link href='/'>
					<a className='text-gray-600 hover:text-purple-600 p-4'>Contact</a>
				</Link>
				<Link href='/'>
					<a className=' bg-purple-600 hover:bg-purple-700 text-gray-50 hover:text-purple-600 p-2 px-5 rounded-full flex'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-6 h-6 mr-3'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
							/>
						</svg>
						Cart (0)
					</a>
				</Link>
			</div>
		</nav>
	)
}

export default Navbar

// Language: typescript
