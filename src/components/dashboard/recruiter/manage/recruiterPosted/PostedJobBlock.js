import { FaBookmark, FaMapMarkerAlt, FaRegEye } from 'react-icons/fa'
import { useJobType } from '../../../../../hooks/useJobHook'
import { Link } from 'react-router-dom'

const PostedJobBlock = ({ job }) => {
	const type = useJobType(job.type)
	return (
		<tr className='data mb-20'>
			<td>
				<div className='job-title'>
					<h5>{job.title}</h5>
					<p>
						<span className='me-1'>
							<FaMapMarkerAlt className='me-1' />
							{job.location || 'None'}
						</span>
						<span>
							<FaBookmark className='me-1' />
							{type}
						</span>
					</p>
				</div>
			</td>
			<td>
				<div className='job-status'>{job.status || 'Pending'}</div>
			</td>
			<td>{job.starting}</td>
			<td>
				<Link to='view' className='btn edit'>
					<FaRegEye />
				</Link>
			</td>
		</tr>
	)
}

export default PostedJobBlock