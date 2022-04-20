import { useEffect, useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import { FaBell } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import Image from '../../assets/images/user.svg'
import Logo from '../../assets/logos/logo.svg'
import useHeaderColor from '../../hooks/useHeaderColor'
import Animate from './animate/Animate'
import { userFetch } from '../../redux/actionCreators/userActionCreators'
import ModalYesNo from 'components/commonComponents/modals/ModalYesNo'

const Header = () => {
	const [logoutModal, setLogoutModal] = useState(false)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const token = useSelector(state => state.auth.token)
	const user = useSelector(state => state.user.user)
	const profile = useSelector(state => state.user.profile)
	const picture = profile?.picture
	const headerColor = useHeaderColor()
	const [navbar, setNavbar] = useState()
	const { pathname } = useLocation()

	const STYLES = {
		normal: {
			background: headerColor,
			transition: 'background 500ms',
		},
		active: {
			background: 'white',
		},
	}

	useEffect(() => {
		if (token) {
			dispatch(userFetch())
		}
		scrollToZero()
	}, [pathname, token, dispatch])

	const changeNavbar = () => {
		if (window.scrollY >= 1) {
			setNavbar(true)
		} else {
			setNavbar(false)
		}
	}
	const scrollToZero = () => {
		window.scrollTo(0, 0)
	}
	const logoutAction = () => {
		navigate('/logout')
	}
	window.addEventListener('scroll', changeNavbar)

	return (
		<div
			className={navbar ? 'header-top-area active' : 'header-top-area'}
			style={navbar ? STYLES.active : STYLES.normal}
		>
			<div className='container-fluid'>
				<div className='row d-flex justify-content-center'>
					<div className='col-lg-3'>
						<div className='logo'>
							<Animate />
							<Link to='/' onClick={scrollToZero}>
								<img src={Logo} alt='Logo' />
							</Link>
						</div>
					</div>
					<div className='d-flex justify-content-end col-lg-9'>
						<div className='menu-area'>
							<nav>
								<ul>
									<li>
										<NavLink to='/'>Home</NavLink>
									</li>
									<li>
										<NavLink to='/jobs'>Jobs</NavLink>
									</li>
									<li>
										<NavLink to='/blogs'>Blog</NavLink>
									</li>
									<li>
										<NavLink to='/about'>About</NavLink>
									</li>
									<li>
										<NavLink to='/contact'>Contact</NavLink>
									</li>
								</ul>
							</nav>
							{token === null ? (
								<Link to='/login' className='btn btn-main join-us'>
									Join Us
								</Link>
							) : (
								<div className='header-icon'>
									<Link to='/dashboard'>
										<span>
											<FaBell />
										</span>
									</Link>

									<Dropdown>
										<Dropdown.Toggle as='a'>
											<img src={picture ? picture : Image} alt='' />
										</Dropdown.Toggle>

										<Dropdown.Menu>
											<Link to='/dashboard'>Dashboard</Link>
											{user?.user_type === 2 && <Link to='/jobseeker'>Jobseeker</Link>}
											<Link to='/dashboard/message'>Message</Link>
											<Link to='#' onClick={() => setLogoutModal(true)}>
												Logout
											</Link>
										</Dropdown.Menu>
									</Dropdown>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
			<ModalYesNo
				open={logoutModal}
				onClose={() => setLogoutModal(false)}
				onAccept={logoutAction}
				data={{
					title: 'Are you sure to Logout?',
					subTitle: 'Private data will be unaccessible.',
					body: 'Logout from authentication session',
					footer: '* You have to login again to access private data!',
					yesText: 'Logout',
				}}
			/>
		</div>
	)
}

export default Header
