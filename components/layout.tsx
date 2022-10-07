import { ReactNode } from 'react'
import Navbar from './navbar'
import ScreenSizeIndicator from './ScreenSizeIndicator'

interface _LayoutProps {
	children: ReactNode
}

const Layout = ({ children }: _LayoutProps) => {
	return (
		<div className='container mx-auto p-5'>
			<ScreenSizeIndicator />
			<Navbar />
			<main>{children}</main>
		</div>
	)
}

export default Layout

// Language: typescript
