import React from 'react'
import Carousel from "../components/Carousel"
import Info from "../components/Info"
import Notice from "../components/Notice/Notice"
import Courses from '../components/Courses'


function Body() {
    return (
        <div>
            
            <Carousel />
            <Info />
            <Notice />
            <Courses />
        </div>
    )
}

export default Body
