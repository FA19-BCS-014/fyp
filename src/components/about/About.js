import FutureBg from "../../assets/svgs/future-bg.svg"
import StoryBg from "../../assets/svgs/story-bg.svg"
import MemberCard from "./memberCard/MemberCard"
import RoadmapCard from "./roadmapCard/RoadmapCard"
import StoryPlan from "./storyPlan/StoryPlan"
import hamza from '../../assets/images/hamza.jpeg'
import talha from '../../assets/images/talha.jpeg'

const About = () => {
  document.title = "JOBGURU | About"

  const teamMembersInfo = [
    {
      id: 1,
      name: "Talha Tariq",
      designation: "DEVELOPER",
      image: talha,
    },
    {
      id: 2,
      name: "Malik Hamza Nadeem",
      designation: "DEVELOPER",
      image: hamza,
    },
  ]

  const teamMembers = teamMembersInfo.map((member) => {
    return (
      <div className='col-lg-3 col-md-6 col-sm-6' key={member.id}>
        <MemberCard name={member.name} designation={member.designation} image={member.image} />
      </div>
    )
  })

  const roadmapInfo = [
    {
      id: 1,
      month: "Apr",
      day: "20",
      title: "Initial Plans",
    },
    {
      id: 2,
      month: "Jun",
      day: "12",
      title: "UI/UX Design",
    },
    {
      id: 3,
      month: "Aug",
      day: "23",
      title: "Front End",
    },
    {
      id: 4,
      month: "Oct",
      day: "04",
      title: "Back End",
    },
  ]

  const roadmap = roadmapInfo.map((info) => {
    return <RoadmapCard key={info.id} month={info.month} day={info.day} title={info.title} />
  })

  const stories_plan = {
    our_story: {
      title: "Our Story",
      description:
        'The story behind making our platform is to help students find hourly-based jobs nearby and help recruiters to find employees at ease. Thus, students can utilize their free time and bear their own expenses, and employers can save their valuable time. Our goal is to create an attitude among people that "Small or Large, No Job Is Negligible."',
      img: StoryBg,
    },
    future_plan: {
      title: "Future Plans",
      description:
        "JOBGURU platform started as a project for our university's final year defense, but we had more effective plans for the project from the beginning. We will work hard in the future to deliver the platform to each and every person in our country so that they can get the most result from it.",
      img: FutureBg,
    },
  }

  return (
    <div>
      <div className='intro-area center-flex mt-70'>
        <div className='intro-text'>
          <h1 className='intro-heading'>JOBGURU</h1>
          <p>
            A project by team (Talha & Hamza) and <br />a platform to find hourly-based jobs nearby via live
            location.
          </p>
        </div>
      </div>

      <StoryPlan story={stories_plan.our_story} order='' />

      <div className='team-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 col-md-12 offset-lg-2'>
              <div className='team-content'>
                <div className='team-cards'>
                  <div className='row'>
                    <div className='col-lg-12'>
                      <h3 className='team-heading'>Our Team</h3>
                    </div>
                  </div>
                  <div className='row'>{teamMembers}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <StoryPlan story={stories_plan.future_plan} order='order-first' />

       </div>
  )
}

export default About
