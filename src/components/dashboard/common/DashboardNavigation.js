import {
	FaAddressBook,
	FaAngleDown,
	FaEnvelope,
	FaIdCardAlt,
	FaPager,
	FaPenSquare,
	FaSearchLocation,
	FaSignOutAlt,
	FaTachometerAlt,
	FaTasks,
	FaUserCircle,
	FaUserEdit,
} from 'react-icons/fa'
import { NavLink, Link } from 'react-router-dom'
import Image from '../../../assets/images/user.svg'

const DashboardNavigation = ({ navigations, user }) => {
	const { id, name, type, photo } = user
	const { recruiterNavigation, seekerNavigation } = navigations
	const sidebar_menu = type === 1 ? seekerNavigation : recruiterNavigation

	const iconFinder = icon => {
		if (icon === 'home') {
			return <FaTachometerAlt />
		} else if (icon === 'message') {
			return <FaEnvelope />
		} else if (icon === 'edit') {
			return <FaUserEdit />
		} else if (icon === 'manage') {
			return <FaTasks />
		} else if (icon === 'running') {
			return <FaPager />
		} else if (icon === 'logout') {
			return <FaSignOutAlt />
		} else if (icon === 'post') {
			return <FaPenSquare />
		} else if (icon === 'find') {
			return <FaSearchLocation />
		} else if (icon === 'address') {
			return <FaAddressBook />
		} else if (icon === 'about') {
			return <FaIdCardAlt />
		} else if (icon === 'profile') {
			return <FaUserCircle />
		} else {
			return <FaTachometerAlt />
		}
	}

	const handleDropDown = event => {
		const parentEle = event.target.parentElement.parentElement
		parentEle.classList.toggle('showMenu')
	}

	return (
		<div className='dashboard-sidebar'>
			<div className='user'>
				<div
					className='user-photo'
					style={{ backgroundImage: `url(${photo !== null ? photo : Image})` }}
				></div>
				<div className='user-info'>
					<h5>
						<NavLink to={`/user/${id}`}>{name}</NavLink>
					</h5>
					<p>{type === 1 ? 'Job Seeker' : 'Recruiter'}</p>
				</div>
			</div>

			<div className='dashboard-navigation'>
				<nav>
					<ul>
						{sidebar_menu.map((item, index) => {
							return (
								<li key={index} onClick={event => handleDropDown(event)}>
									<NavLink to={`${item.link}`}>
										<div>
											<span>{iconFinder(item.icon)}</span> {item.name}
										</div>
										{item.subMenu !== null && (
											<span className='dropdown-icon'>
												<FaAngleDown />
											</span>
										)}
									</NavLink>
									{item.subMenu !== null && (
										<ul className='sub-menu'>
											{item.subMenu.map((item, index) => {
												return (
													<li key={index}>
														<NavLink to={item.link} className='link-name'>
															<span>{iconFinder(item.icon)}</span>
															{item.name}
														</NavLink>
													</li>
												)
											})}
										</ul>
									)}
								</li>
							)
						})}
					</ul>
				</nav>
			</div>
		</div>
	)
}

export default DashboardNavigation
