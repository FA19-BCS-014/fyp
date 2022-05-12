import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import OngoingJobBlock from './OngoingJobBlock'
import { Spinner } from 'react-bootstrap'
const url = process.env.REACT_APP_BACKEND_SERVER

const RecruiterOngoingJob = () => {
	document.title = 'HourlyFinder | Ongoing Jobs'
	const [ongoingJobs, setOngoingJobs] = useState(null)
	const dispatch = useDispatch()
	const profile = useSelector(state => state.user.profile)

	const { id } = profile || { id: null }
	useEffect(() => {
		if (id !== null) {
			const fetchOngoingJobs = async id => {
				const token = localStorage.getItem('token')
				if (token) {
					const config = {
						headers: {
							'Content-Type': 'application/json',
							Authorization: `JWT ${token}`,
							Accept: 'application/json',
						},
					}
					await axios
						.get(`${url}/jobs/work/?id=${id}`, config)
						.then(response => setOngoingJobs(response.data))
						.catch(error => console.log(error.response))
				}
			}
			fetchOngoingJobs(id)
		}
	}, [dispatch, id])

	return (
		<div className='dashboard-main'>
			<h3 className='dashboard-title'>Ongoing Jobs</h3>
			<div className='dashboard-content'>
				<div className='ongoing-job-area'>
					{ongoingJobs === null ? (
						<Spinner />
					) : ongoingJobs.length === 0 ? (
						<p>No Ongoing Jobs</p>
					) : (
						ongoingJobs.map(job => <OngoingJobBlock work={job} />)
					)}
				</div>
			</div>
		</div>
	)
}

export default RecruiterOngoingJob
