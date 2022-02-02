import MemberCard from './memberCard/MemberCard'
import RoadmapCard from './roadmapCard/RoadmapCard'
import IntroBg from '../../svgs/intro-bg.svg'
import StoryBg from '../../svgs/story-bg.svg'
import FutureBg from '../../svgs/future-bg.svg'

const About = () => {
	document.title = 'HourlyFinder | About'

	const teamMembersInfo = [
		{
			name: 'Sajeeb Debnath',
			designation: 'Founder & CEO',
			image: '/images/aboutPage/team-1.jpg'
		},
		{
			name: 'Rashed Ahmed',
			designation: 'Co-Founder & LD',
			image: '/images/aboutPage/team-2.jpg'
		},
		{
			name: 'Samiul Siddique',
			designation: 'CTO & BM',
			image: '/images/aboutPage/team-3.jpg'
		}
	]

	const teamMembers = teamMembersInfo.map(member => {
		return (
			<MemberCard 
				name={member.name}
				designation={member.designation}
				image={member.image}
			/>
		)
	})

	const roadmapInfo = [
		{
			month: 'Apr',
			day: '20',
			title: 'Initial Plannings'
		},
		{
			month: 'Jun',
			day: '12',
			title: 'UI/UX &amp; Brainstorming'
		},
		{
			month: 'Aug',
			day: '23',
			title: 'Front End'
		},
		{
			month: 'Oct',
			day: '04',
			title: 'Back End'
		}
	]

	const roadmap = roadmapInfo.map(info => {
		return (
			<RoadmapCard
				month={info.month}
				day={info.day}
				title={info.title}
			/>
		)
	})

	return (
		<div>
			<div
				className='intro-area center-flex mt-70'
				style={{ backgroundImage: IntroBg }}
			>
				<div className='intro-text'>
					<h1 className='intro-heading'>Hourly Finder</h1>
					<p>
						A project by team CodeDamn and a platform to find hourly-based jobs
						nearby via live location.
					</p>
				</div>
			</div>
			{/* <!-- ==================== Intro Area End ==================== --> */}

			{/* <!-- ==================== Story Area Start ==================== --> */}
			<div className='story-area'>
				<div className='story-image'>
					<img src={StoryBg} alt='' />
				</div>
				<div className='story-content'>
					<div className='story-text'>
						<h3 className='story-heading'>Our Story</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
							vel, urna imperdiet aliquet platea sodales. Faucibus congue
							vulputate nunc, facilisi diam volutpat augue. Luctus dui a mauris,
							diam eget nisl, vel vel. Etiam in ullamcorper neque aliquet
							malesuada pharetra est neque.
						</p>
					</div>
				</div>
			</div>
			{/* <!-- ==================== Story Area End ==================== --> */}

			{/* <!-- ==================== Team Area Start ==================== --> */}
			<div className='team-area center-flex'>
				<div className='team-content'>
					<h3 className='team-heading'>Our Team</h3>
					<div className='team-cards'>
						{teamMembers}
					</div>
				</div>
			</div>
			{/* <!-- ==================== Team Area End ==================== --> */}

			{/* <!-- ==================== Future Area Start ==================== --> */}
			<div className='future-area'>
				<div className='future-content'>
					<div className='future-text'>
						<h3 className='future-heading'>Future Plans</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
							vel, urna imperdiet aliquet platea sodales. Faucibus congue
							vulputate nunc, facilisi diam volutpat augue. Luctus dui a mauris,
							diam eget nisl, vel vel. Etiam in ullamcorper neque aliquet
							malesuada pharetra est neque.
						</p>
					</div>
					<div className='future-image'>
						<img src={FutureBg} alt='' />
					</div>
				</div>
			</div>
			{/* <!-- ==================== Future Area End ==================== --> */}

			{/* <!-- ==================== Roadmap Area Start ==================== --> */}
			<div className='roadmap-area center-flex'>
				<div className='roadmap-content'>
					<h3 className='roadmap-heading'>Road Map</h3>

					<div className='roadmap-cards'>
					{roadmap}
					</div>
					<div className='roadmap-road'>
						<div className='roadmap-progress'></div>
					</div>
				</div>
			</div>
			{/* <!-- ==================== Roadmap Area End ==================== --> */}
		</div>
	)
}

export default About
