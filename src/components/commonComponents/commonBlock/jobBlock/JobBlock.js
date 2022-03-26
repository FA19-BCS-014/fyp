import { Link } from 'react-router-dom'
import org_logo from '../../../../assets/svgs/org.svg'
import Tags from '../../../commonComponents/tagElement/Tags'
import { DateTime } from 'luxon'
import { useJobType, useTimeSince } from '../../../../hooks/useJobHook'

const JobBlock = ({ job }) => {
	const { title, slug, type, keyword, created } = job
	const { logo, name, location } = job.company

	const jobType = useJobType(type)
	const timeSince = useTimeSince(DateTime.fromISO(created))

	return (
		<div className='job-card'>
			<div className='about-recruiter d-flex align-items-center'>
				<Link to=''>
					<img src={logo ? logo : org_logo} alt='logo' className='recruiter-logo' />
				</Link>
				<h5 className='recruiter-title'>
					<Link to=''>{name.slice(0, 14)}, </Link>
					<br />
					<span className='post_time'>{timeSince}</span>
				</h5>
			</div>
			<div className='job-content'>
				<h3 className='job-title'>
					<Link to={`/job/${slug}`}>{title.slice(0, 40)}</Link>
				</h3>
				<div className='job-status'>
					<span className='job-type'>{jobType}</span> in
					<span className='job-location'>
						<Link to=''> {location}</Link>
					</span>
				</div>
				<Tags tags={keyword} />
			</div>
		</div>
	)
}

export default JobBlock
