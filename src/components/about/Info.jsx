import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">

            <i className="bx bx-award about__icon"></i>
            <h3 className="about__title">
                Problem Solving
            </h3>
            <span className="about__subtitle">
                Solved 800+ problem in C++. 
            </span>
        </div>

        <div className="about__box">
            <i className="bx bx-briefcase-alt about__icon" ></i>
            <h3 className="about__title">
                Completed Works
            </h3>
            <span className="about__subtitle">
                4-5 major projects.
            </span>
        </div>

        <div className="about__box">
        <i className="uil uil-user-md about__icon"></i>
            <h3 className="about__title">
                Teaching.
            </h3>
            <span className="about__subtitle">
                Teaches mathematics more than 50+ students .
            </span>
        </div>
        
    </div>
  )
}

export default Info