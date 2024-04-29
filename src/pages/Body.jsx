import React from 'react'
import Carousel from "../components/Carousel"
import Info from "../components/Info"
import Notice from "../components/Notice/Notice"
import Courses from '../components/Courses'
import PopupForm from '../components/PopupForm'

function Body() {
    return (
        <div>
            <Carousel />
            <PopupForm />
            <Info />
            <Notice />
            <Courses />
        </div>
    )
}

export default Body
