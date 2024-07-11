import React from 'react'
import "./qualification.css"
import Education from './Education'
import Achievement from './Achievement'


const Qualification = () => {
  return (
    <section className="prac section" id='qualification'>
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">
            My academic journey  
        </span>

        <div className="prac__container container">
    
            <div className="btn__data">
                <Education/>

                <Achievement/>
            </div>
            

        </div>
    </section>
  )
}

export default Qualification