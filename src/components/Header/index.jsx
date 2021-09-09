import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

function Header(props) {
	return (
		<>
			<nav className='navbar w-100 h-auto' style={{ backgroundColor: '#6772E5' }}>
				<a
					className='navbar-brand text-light'
					href='/'
					style={{
						fontSize: '18px',
						textDecoration: 'none',
						display: 'inline-block',
						marginLeft: 10,
						padding: 8,
						letterSpacing: 5,
						fontWeight: 'bold'
					}}>
					AWASZON
				</a>
				<ul className='navbar-nav mr-5'>
					<li className='nav-item'>
						<div className='d-flex flex-row justify-content-end align-items-end'>
							<Link
								className='nav-link text-light'
								to='/payment'
								style={{
									fontSize: '17px',
									textDecoration: 'none',
									display: 'inline-block',
									marginRight: 25,
									padding: 8,
									fontWeight: 600
								}}>
								<FaShoppingCart />
								<span className='p-2'>
									{localStorage.getItem('countItems') === null ? props.count : localStorage.getItem('countItems')}
								</span>
							</Link>
						</div>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default Header
