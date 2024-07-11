import React from 'react'

const Education = () => {
  return (
    <div className="education__container container">
        <div>
            <h2 className='education__title'>Education</h2>
        </div>
        

        <div className="education__content">
            <div>
                <h4 className='degree'>Graduation continuing...</h4>
                <p className="college">NIT Silchar <strong>Grade :</strong> 8.79 </p>
                 
            </div>

            <div>
                <h4 className='degree'>12th</h4>
                <p className="college">Kalyanpur H.S School <strong>Percentage :</strong> 94% </p>
                 
            </div>

            <div>
                <h4 className='degree'>10th</h4>
                <p className="college">North Ghilatali (Ratia) H.S School <strong>Percentage :</strong> 88% </p>
                 
            </div>
        </div>
    </div>
  )
}

export default Education