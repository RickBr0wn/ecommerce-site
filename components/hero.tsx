import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
	return (
		<div className='flex mt-8 flex-col md:flex-row'>
			{/* left */}
			<div className='md:w-3/6 flex flex-col justify-center text-gray-600 pl-14'>
				<h2 className='font-serif text-4xl lg:text-5xl mb-4'>
					Some Catchy Title Here
				</h2>
				<p className='uppercase tracking-wide'>Our brand tagline goes here.</p>
				<p className='uppercase tracking-wide mb-4'>
					Our brand motto goes here.
				</p>
				<Link href={'/'}>
					<a className='bg-gradient-to-r from-purple-600 to-pink-500 rounded-full py-2 px-6 text-gray-50 text-lg self-start'>
						SHOP NOW
					</a>
				</Link>
			</div>
			{/* right */}
			<div className='md:w-3/6'>
				<Image
					src='/../public/hero-image.png'
					alt='hero'
					width={16}
					height={12}
					layout='responsive'
				/>
			</div>
		</div>
	)
}

export default Hero

// Language: typescript
