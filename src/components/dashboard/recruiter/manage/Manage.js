import { useSelector } from 'react-redux'
import RecruiterPostedJob from './recruiterPosted/RecruiterPostedJob'
import SeekerApplication from '../../seeker/application/SeekerApplication'

const Manage = () => {
	const user = JSON.parse(window.localStorage.getItem("user"))

	if (user?.user_type === 2) return <RecruiterPostedJob />
	else if (user?.user_type === 1) return <SeekerApplication />
	else return <p>Invalid User</p>
}

export default Manage
