import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import { userFetch } from "../../../redux/actionCreators/userActionCreators"
import DashboardNavigation from "../common/DashboardNavigation"
import DashboradRightBar from "../common/DashboradRightBar"

const RecruiterDashboard = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.user)
  const profile = useSelector((state) => state.user.profile)

  useEffect(() => {
    dispatch(userFetch())
  }, [])

  const tempEmpty = {
    id: 0,
    email: "no@email",
    first_name: "User",
    last_name: "Name",
    username: "user",
    user_type: 1,
    bio: "",
    expertise: "",
    phone: "",
  }
  const { id, email, first_name, last_name, username, user_type } = user === null ? tempEmpty : user
  const { bio, expertise, phone } = profile === null ? tempEmpty : profile

  const DashboardInformation = {
    recruiterNavigation: [
      {
        name: "Dashboard",
        icon: "home",
        link: "overview",
        subMenu: null,
      },
      {
        name: "Edit Profile",
        icon: "edit",
        link: "#",
        subMenu: [
          {
            name: "Profile",
            icon: "edit",
            link: "edit-profile",
          },
          {
            name: "Organization",
            icon: "edit",
            link: "edit-profile",
          },
          {
            name: "Address",
            icon: "edit",
            link: "edit-profile",
          },
        ],
      },
      {
        name: "Find Jobseeker",
        icon: "find",
        link: "/jobseeker",
        subMenu: null,
      },
      {
        name: "Post Job",
        icon: "post",
        link: "post-job",
        subMenu: null,
      },
      {
        name: "Manage Job",
        icon: "manage",
        link: "manage-job",
        subMenu: null,
      },
      {
        name: "Ongoing Job",
        icon: "running",
        link: "ongoing-job",
        subMenu: null,
      },
      {
        name: "Logout",
        icon: "logout",
        link: "/logout",
        subMenu: null,
      },
    ],
    seekerNavigation: [
      {
        name: "Dashboard",
        icon: "home",
        link: "overview",
        subMenu: null,
      },
      {
        name: "Edit Profile",
        icon: "edit",
        link: "#",
        subMenu: [
          {
            name: "Profile",
            icon: "edit",
            link: "edit-profile",
          },
          {
            name: "About You",
            icon: "edit",
            link: "edit-profile",
          },
          {
            name: "Address",
            icon: "edit",
            link: "edit-profile",
          },
        ],
      },
      {
        name: "Find Jobs",
        icon: "find",
        link: "/jobs",
        subMenu: null,
      },
      {
        name: "Application",
        icon: "manage",
        link: "manage-job",
        subMenu: null,
      },
      {
        name: "Ongoing Job",
        icon: "running",
        link: "ongoing-job",
        subMenu: null,
      },
      {
        name: "Logout",
        icon: "logout",
        link: "/logout",
        subMenu: null,
      },
    ],
    userInfo: {
      id: id,
      name: first_name + " " + last_name,
      type: user_type,
      photo: "",
    },
  }
  return (
    <div className='dashboard-all'>
      <div className='left'>
        <DashboardNavigation navigations={DashboardInformation} user={DashboardInformation.userInfo} />
      </div>
      <div className='mid dashScroll'>
        <Outlet />
      </div>
      <div className='right'>
        <DashboradRightBar />
      </div>
    </div>
  )
}

export default RecruiterDashboard
