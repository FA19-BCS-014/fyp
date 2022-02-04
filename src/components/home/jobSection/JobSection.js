import SectionTitle from '../commonHome/sectionTitle/SectionTitle'
import JobBlock from '../../commonComponents/commonBlock/jobBlock/JobBlock'

const JobSection = () => {

  const jobList = [
    {
      id : 1,
      name: 'aaaaaaa a aaa aaaaa aaaa aa aaa aaaa aaa',
      company: 'aaaaaaaaaaaaaaa',
      company_id : 2,
      image: '/images/homepage/recruiter-logo.png',
      time: '8h ago',
      type: 'aaaaaaaaaa',
      location: 'aaaaaaaaaa',
      keyword: [
        {
          name : "Creative",
          color : "house"
        },
        {
            name : "Painting",
            color : "painting"
        }
      ]
    },
    {
      id :2,
      name: 'Complete House Color Painting Services ssss ssssss ssss sssssssss sssssssssssssssssssssssssss',
      company: 'Foundersssssssssssssssss',
      company_id : 2,
      image: '/images/homepage/recruiter-logo.png',
      time: '8h ago',
      type: 'Hourly',
      location: 'Bananiiiiiii iiiiiiiiiiiiii',
      keyword: [
        {
            name : "Painting",
            color : "painting"
        }
      ]
    },
    {
      id : 3,
      name: 'Catering Supervisor',
      company: 'Radhey Recruiter',
      company_id : 2,
      image: '/images/homepage/recruiter-logo.png',
      time: '3 days ago',
      type: 'Full-time',
      location: 'Dhaka',
      keyword: [
        {
          name : "Catering",
          color : "painting"
        },
        {
          name : "Supervise",
          color : "house"
        }
      ]
    },
    {
      id : 4,
      name: 'Complete House Paintings Services',
      company: 'Founders',
      company_id : 2,
      image: '/images/homepage/recruiter-logo.png',
      time: '8h ago',
      type: 'Hourly',
      location: 'Banani',
      keyword: [
        {
          name : "Creative",
          color : "house"
        },
        {
            name : "Painting",
            color : "painting"
        }
      ]
    }
  ]

  const jobs = jobList.map(job => {
		return (
			<div class='col-lg-3'>
        <JobBlock job={job} />
      </div>
		)
	})

  return (
    <div class='most-recent-jobs section-padding'>
        <div class='container'>
            <SectionTitle title="Most Recent Jobs" subTitle="All Jobs" subLink="#" />
            <div class='row pt-40'>
                {jobs}
            </div>
        </div>
    </div>
  )
}

export default JobSection
