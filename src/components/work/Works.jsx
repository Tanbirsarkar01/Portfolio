import React from 'react'

const Works = () => {
  return (
    <section className="section works">

      <div className="proj_sec">
        <div className="container_grid">
          <div className="grid1 grid_main">
            <span className='grid_subtitle'>
                Rock-Paper-Scissor
            </span>
            <div className="grid_image1">

            </div>
            <div className="proj_des">
              <strong>Description :</strong> It is a basic Rock ,Paper , Scissor game . 
            </div>
            <div className="grid_link">
                <button className='proj_btn'><a href="https://github.com/Tanbirsarkar01/Rock-PaperS-Scissor" target="_blank">GitHub Link</a></button>
                <button className='proj_btn'><a href="https://tanbirsarkar01.github.io/Rock-PaperS-Scissor/" target="_blank">Deployed Link</a></button>
            </div>
          </div>

          <div className="grid2 grid_main">
            <span className='grid_subtitle'>
                Sorting Visualizer
            </span>
            <div className="grid_image2">
                
            </div>
            <div className="proj_des">
            <strong>Description :</strong>It is a basic sorting Visualizer app.
              All the sorting algortihm can be 
              visualise through this app. 
            </div>
            <div className="grid_link">
                <button className='proj_btn'><a href="">GitHub Link</a></button>
                <button className='proj_btn'><a href="">Deployed Link</a></button>
            </div>
          </div>

          <div className="grid3 grid_main">
            <span className='grid_subtitle'>
                Notes App
            </span>
            <div className="grid_image3">
                
            </div>
            <div className="proj_des">
              <strong>Description :</strong>It is notes making app.Someone can write their thoughts and notes and use it future.
            </div>
            <div className="grid_link">
                <button className='proj_btn'><a href="">GitHub Link</a></button>
                <button className='proj_btn'><a href="">Deployed Link</a></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Works