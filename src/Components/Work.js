import "./Workstyle.css"
import WorkCard from "./WorkCard"

import WorkCardData from "./WorkCardData"
import React from 'react'


function Work() {
  return (
    <div className="work-container">
      <h1 className="project-heading">Project</h1>  
        <div className="project-container">
          
            {
                WorkCardData.map((val,i)=>{
                return(
                    <WorkCard
                    key ={i}
                    Imgsrc ={val.imgsrc}
                    title = {val.title}
                    text = {val.text}
                    view = {val.view}
                    />
                )
                })
            }
            
            

        
             
        </div>
    </div>
  )
}

export default Work