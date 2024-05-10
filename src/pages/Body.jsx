import React from 'react'
import Carousel from '../components/Carousel'
import Info from '../components/Info'
import Notice from '../components/Notice/Notice'
import Courses from '../components/Courses'
import PopupForm from '../components/PopupForm'
import Hero from '../app/Hero'
import OutImpressiveStats from '../app/OurImpressiveStats'
import CoursesCategories from '../app/CoursesCategories'
import ExploreCourses from '../app/ExploreCourses'
import Testimonial from '../app/Testimonial'
import Events from '../app/Events'
import StudentsFeedback from '../app/StudentsFeedback'
function Body () {
  return (
    <div>
      {/* <Carousel />
            <PopupForm />
            <Info />
            <Notice />
            <Courses /> */}
      <Hero />
      <OutImpressiveStats />
      <CoursesCategories />
      <ExploreCourses />
      <Testimonial />
      <Events />
      <StudentsFeedback />
    </div>
  )
}

export default Body
