import { ReactNode } from 'react'
import Navbar from './navbar'

interface _LayoutProps {
	children: ReactNode
}

const Layout = ({ children }: _LayoutProps) => {
	return (
		<div className='container mx-auto p-5'>
			<Navbar />
			<main>{children}</main>
		</div>
	)
}

export default Layout

// Language: typescript
