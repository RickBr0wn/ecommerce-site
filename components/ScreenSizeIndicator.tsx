const ScreenSizeIndicator = () => {
	return (
		<div className='absolute top-0 left-0 p-4 text-2xl font-bold uppercase'>
			<h1 className='md:hidden'>sm</h1>
			<h1 className='hidden md:block lg:hidden'>md</h1>
			<h1 className='hidden lg:block xl:hidden'>lg</h1>
			<h1 className='hidden xl:block'>xl</h1>
		</div>
	)
}

export default ScreenSizeIndicator

// Language: typescript
